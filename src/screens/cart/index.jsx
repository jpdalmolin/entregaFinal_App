import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { confirmOrder, removeFromCart } from '../../store/actions';
import{useDispatch, useSelector} from 'react-redux';

import CartItem from '../../components/cart-item';
import { styles } from './styles';

const Cart=({navigation}) =>{
    const dispatch = useDispatch();
    const cart=useSelector((state)=>state.cart.items);
    const total=useSelector((state)=>state.cart.total);
   
    const onDelete = (id) => {
        dispatch(removeFromCart(id));
    };
    const onCreateOrder=()=>{
        dispatch(confirmOrder(cart,total));
    };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();

  const Header=()=>cart.length <=0 && (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>

    </View>
  )
  const Footer=()=>
    cart.length > 0 &&(
        <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonConfirm} onPress={onCreateOrder}>
            <Text style={styles.buttonConfirmText}>Confirm</Text>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>     Total:</Text>
              <Text style={styles.totalPrice}>$ {total}</Text>
            </View>
          </TouchableOpacity>
        </View>
  )
    return (
        <View style={styles.container}>
    
        <View style={styles.listContainer}>
        <Header/>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.listContainer}
          />
        </View>
  
        <Footer/>
      </View>
    );
};

export default Cart;