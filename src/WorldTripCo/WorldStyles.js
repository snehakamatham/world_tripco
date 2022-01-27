
const WorldStyles = {

    maindiv:{
        height:'100vh',
        backgroundColor:'#0066cc',
        backgroundImage : `url("./hero-banner.jpg")`,
        backgroundSize:'cover',
        backgroundPosition:'center',
    },
    heading:{
        margin:'0px 0px 20px 0px',
        color:'white',
        fontWeight:'700',
        fontFamily:'Segoe UI',
        fontSize:'20px'
    },
    maincard:{
        border:'1px solid white',
        borderRadius:'20px',
        height:'300px',
        backgroundColor:'white',
    },
    fromdiv:{
        width:'250px',
        height:'70px',
        borderRadius:'10px',
        margin:'5px',
        border:'2px solid #e1e7ee',
        cursor:'pointer',
        '&:hover':{
            border:'2px solid grey',
        }
    },
    fromlabel:{
        borderRadius:'20px',
        backgroundColor:'white',
        color:'#777777',
        padding:'0px 5px',
        zIndex:'9999',
        marginTop:'-12px',
        width:'30px',
        fontSize:'14px',
        marginLeft:'20px',
        fontWeight:'600'
    },
    delhi:{
        fontSize:'18px',
        textAlign:'left',
        marginLeft:'26px',
        marginTop:'6px',
        color:'black',
        fontWeight:'600'

    },
    delhi2:{
        fontSize:'13px',
        textAlign:'left',
        marginLeft:'26px',
        color:'#777777',
    },
    departurediv:{
        width:'140px',
        height:'70px',
        borderRadius:'10px',
        margin:'5px',
        border:'2px solid #e1e7ee',
        display:'flex',
        cursor:'pointer',
        '&:hover':{
            border:'2px solid grey',
        }
    },
    departurelabel:{
        backgroundColor:'white',
        color:'#777777',
        padding:'0px 5px',
        zIndex:'9999',
        marginTop:'-12px',
        width:'60px',
        fontSize:'14px',
        marginLeft:'20px',
        fontWeight:'600'

    },
    returncontent:{
        fontSize:'13px',
        textAlign:'left',
        marginLeft:'26px',
        color:'#777777',
    },
    traveldiv:{
        width:'260px',
        height:'70px',
        borderRadius:'10px',
        margin:'5px',
        marginRight:'25px',
        border:'2px solid #e1e7ee',
        cursor:'pointer',
        '&:hover':{
            border:'2px solid grey',
        }
    },
    travellabel:{
        backgroundColor:'white',
        color:'#777777',
        padding:'0px 5px',
        zIndex:'9999',
        marginTop:'-12px',
        width:'120px',
        fontSize:'14px',
        marginLeft:'20px',
        fontWeight:'600'
    },
    dialogdiv:{
        zIndex:'999999', 
        width:'500px', 
        height:'450px', 
        backgroundColor:'white', 
        marginLeft:'-500px', 
        borderRadius:'10px', 
        position:'absolute',
        border:'1px solid #f2f2f2',
        boxShadow:'rgb(119 119 119 / 20%) 0px 2px 8px;'
    },
    faretype:{
        backgroundColor:'#f2f2f2', 
        margin:'0px 5px', 
        borderTopRightRadius:'10px', 
        borderBottomRightRadius:'10px', 
        padding:'0px 10px'
    },
    faretype1:{
        backgroundColor: '#f2f2f2',
        margin:'0px 3px', 
        padding: '0px 10px'
    },
    notification:{
        borderRadius: '20px', 
        backgroundColor: 'red', 
        color: 'white', 
        padding: '0px 5px', 
        zIndex: '9999', 
        marginTop: '-8px', 
        width: '30px', 
        fontSize: '10px'
    },
    adult1:{
        border:'2px solid #e1e7ee',
        borderRadius:'8px',
        display:'flex',
        justifyContent:'space-between',
        margin:'5px 20px'
    },
    adultchild:{
        fontSize:'18px',
        textAlign:'left',
        marginLeft:'10px',
        marginTop:'6px',
        color:'black',
        fontWeight:'600'

    },
    travelclass:{
        border:'2px solid #e1e7ee',
        borderRadius:'8px',
        padding:'5px 12px',
        margin:'2px',
        cursor:'pointer'
    },
    counterdesign:{
        backgroundColor: '', 
        cursor: 'pointer', 
        padding: '3px 5px'
    },
    maincounterdesign:{
        alignItems: 'center', 
        height: '100%', 
        fontSize: '20px'
    },
    counterlabeldesign:{
        backgroundColor: '', 
        cursor: 'pointer', 
        padding: '3px 5px', 
        alignItems: 'center'
    },
    searchflightbtn:{
        backgroundColor: '#ff6d38', 
        borderRadius: '30px', 
        padding: '12px 35px', 
        textTransform: 'uppercase', 
        fontWeight: '800', 
        color: 'white', 
        fontSize: '20px'
    }


}

export default WorldStyles