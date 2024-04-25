const { default: axios } = require("axios");


const axiosClient=axios.create({
  baseURL:'http://localhost:1337/api'
})

const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>{ return resp.data.data});

const getProducts=()=>axiosClient.get('/stores?populate=*').then(resp=>{return resp.data.data});

const getCatList=()=>axiosClient.get('/catgs?populate=*').then(resp=>{return resp.data.data});

const getProductByCategory=(category)=>axiosClient.get('/stores?filters[catgs][cname][$in]='+category+"&populate=*").then(resp=>{return resp.data.data});

export default{
  getSliders,
  getProducts,
  getCatList,
  getProductByCategory
}