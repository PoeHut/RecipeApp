import {StyleSheet}  from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    SplashContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    imageStyle: {
        width: wp(100),
        height: wp(100)/1.5,
        alignItems: 'center',
        marginVertical: hp(3.5)
    },
    textStyle: {
        fontSize: hp(5),
        fontFamily: 'Pacifico-Regular',
        color: '#503E9D'
    },
    textDim: {
        fontSize: hp(3),
        fontFamily: 'Raleway-Regular',
        color: '#696969',
    },
    buttonStyle: {
        backgroundColor: '#F9A11B',
        borderRadius: 28,
        marginTop: hp(3.3),
        elevation: 3.5
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Raleway-Bold',
        fontSize: hp(2.5),
        marginHorizontal: hp(10),
        marginVertical: 10
    },
    logoStyle: {
        width: wp(28),
        height: hp(14),
    },
    buttonYellow: {
        backgroundColor: '#FFC700',
        borderRadius: hp(5),
        alignItems: 'center',
        elevation: 8,
        marginTop: hp(3)
    },
    buttonBlue: {
        backgroundColor: '#503E9D',
        borderRadius: hp(5),
        alignItems: 'center',
        elevation: 8,
        marginTop: hp(3)
    },
    buttonOrange: {
        backgroundColor: '#F9A11B',
        borderRadius: hp(5),
        alignItems: 'center',
        elevation: 8,
        marginTop: hp(3)
    },

    //style for login screen
    loginContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    loginHeader: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBody: {
        flex: 6.5,
        backgroundColor: '#F9A11B',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 5,
        paddingHorizontal: wp(6.5)
    },
    loginTitle: {
        backgroundColor: '#503E9D', 
        alignSelf: 'center',
        position: 'absolute',
        top: -20,
        borderBottomStartRadius: hp(10),
        borderTopEndRadius: hp(10),
        elevation: 20,
    },
    loginTitleText: {
        fontFamily: 'Raleway-Bold',
        fontSize: hp(2.5),
        color: '#fff',
        paddingVertical: wp(2.5),
        paddingHorizontal: hp(15),
    },
    InputStyle: {
        borderBottomColor: '#000',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderBottomColor: '#696969',
        marginTop: hp(10),
        alignItems: 'center'
    },
    PasswordStyle: {
        borderBottomColor: '#000',
        flexDirection: 'row',
        borderBottomWidth: 0.8,
        borderBottomColor: '#696969',
        marginTop: hp(2.5),
        alignItems: 'center'
    },
    
    //home style
    homeContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: wp(3),
        paddingVertical: hp(3)
    },
    //menu style
    menuDetailContainer: {
        backgroundColor: '#F9A11B',
        marginHorizontal: wp(1.2),
        marginBottom: hp(3),
        borderRadius: hp(5)
    },
    menuImage: {
        width: wp(26),
        height: wp(26),
        borderRadius: hp(5),
        margin: hp(1.3)
    },
    menuText: {
        color: '#FFF',
        fontFamily: 'Raleway-Bold',
        fontSize: hp(2.3),
        alignSelf: 'center',
        marginBottom: hp(1.5)
    },

    //post style
    postDetailContainer: {
        borderRadius: hp(5),
        marginBottom: hp(2.5),
        marginTop: hp(2),
        flexDirection: 'row',
        borderColor: '#CCC',
        padding: hp(1.5),
        borderWidth: 1,
    },
    postDetailImage: {
        width: wp(30),
        height: wp(30),
        marginRight: wp(1.5),
        borderRadius: hp(5),
    },
    postDetailContent: {
        flex: 1,
    },
    titleStyle: {
        fontFamily: 'Raleway-Bold',
        fontSize: hp(3),
        color: '#000'
    },
    desStyle: {
        fontFamily: 'Raleway-Regular',
        fontSize: hp(2.3),
        color: '#000'
    },
    txtThin: {
        fontFamily: 'Raleway-Medium',
        fontSize: hp(1.2),
        color: '#808080',
        marginTop: hp(0.5),
        marginLeft: hp(1.5)
    },

    //detail style
    detailImage: {
        width: wp(90),
        height: hp(50),
        borderRadius: hp(5),
        alignSelf: 'center'
    }
})