new Vue({
    el:"#app",
    data:{
        //购物车数据
        shopListArr:[],
        //是否全选
        isSelectedAll:false,
        //所有商品的总价格
        totalPrice:0,
        //是否隐藏删除面板
        isHideDelPanel:true,
        //要删除的商品
        curreatDelShop:{},
    },
    //组件已经加载完毕，请求网络数据，业务处理
    mounted(){
        //请求本地数据
        this.getLocalData();
    },
    //过滤
    filters: {
        moneyFormate: function (money) {
            // return '￥' + money;
            return '￥' + money.toFixed(2);
          }
    },
    methods:{
        //1.求求本地数据
        getLocalData(){
              this.$http.get('data/car.json').then(response => {
                // console.log(response.body);
                const res = response.body;
                if(res){
                    this.shopListArr= res.allShops.shopList;
                    console.log(this.shopListArr);
                }
              }, response => {
                // error callback
                alert("请求失败！")
              });
        },
        //2.单个商品加减
        singerShopPrice(shop,flag){
            if(flag){//加
                shop.shopNumber +=1;
            }else{//减
                if(shop.shopNumber<=1){
                    shop.shopNumber=1
                }else{
                    shop.shopNumber -=1;
                }
            }
            //计算总价格
            this.getAllShopPrice();
        },
        //3选中所以商品
        selectedAll(flag){
            //3.1总控制
            this.isSelectedAll = !flag;

            //3.2遍历所有商品
            this.shopListArr.forEach((value,index)=>{
                if(typeof  value.checked==='undefined'){
                    this.$set(value,'checked',!flag)
                    console.log();
                }else {
                    value.checked=!flag;
                }
            })
            //3.3计算总价格
            this.getAllShopPrice();

        },
        //4.计算商品总价格
        getAllShopPrice(){
            let totalPrice = 0;
            this.shopListArr.forEach((value,index)=>{
                //判断商品是否被选中
                if(value.checked){
                    totalPrice +=value.shopPrice*value.shopNumber;
                }
            });
            this.totalPrice = totalPrice;
        },
        //5.单个商品的选中和取消
        singerShopSelected(shop){
            //5.1判断有没有checked属性
            if(typeof  shop.checked==='undefined'){
                this.$set(shop,'checked',true);
            }else(
                shop.checked = !shop.checked
            )
            //5.2计算总价
            this.getAllShopPrice();
            //5.3判断是否全选
            this.hasSelectedAll();
        },
        //6.判断是否全选
        hasSelectedAll(){
                let flag = true;
                //判断商品是否被选中
                this.shopListArr.forEach((value,index)=>{
                    //判断商品是否被选中
                    if(!value.checked){
                        flag =false;
                    }
                });
                this.isSelectedAll =  flag;
        },
        //7.点击删除
        clickTrash(shop){
            this.isHideDelPanel  = false;
            this.curreatDelShop =  shop;
        },
        //8.删除商品
        delShop(){
            //8.1隐藏面板
            this.isHideDelPanel  = true;
            //8.2删除
            // const index = this.shopListArr.indexOf(this.curreatDelShop);
            // this.shopListArr.splice(index,1);

            this.shopListArr.splice(this.curreatDelShop,1);
            //8.3计算总价
            this.getAllShopPrice();
        }
    },
});
