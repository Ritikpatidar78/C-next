
const fetchdata = async() => {
    const response = await fetch("http://fakestoreapi.com/products");
    const data = await response.json();
    return data;
}


const Shopservice = {
    fetchdata,
};

export default Shopservice;