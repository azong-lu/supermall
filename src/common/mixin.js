import {debounce} from "./Utils";
import ClickBack from "components/content/clickback/ClickBack";

export const itemClickListener = {
  data(){
    return{
      imageLoads:null
    }
  },
  mounted(){
    const loadRefresh = debounce(this.$refs.scroll.scrollRefresh,50)
    this.imageLoad = () => {
      loadRefresh()
    }
    this.$bus.$on('itemImageLoad',this.imageLoad)
    console.log('mixin的内容');
  }
}

export const clickBackLister = {
  components:{
    ClickBack
  },
  data() {
    return {
      isShowBtn:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.ScrollTo(0,0);
    },
    btnShow(position){
      // console.log(position);
      this.isShowBtn = (-position.y)>1000
    }
  }
}
