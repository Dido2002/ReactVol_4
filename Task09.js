import React,{useState, useEffect} from "react";
import axios from 'axios';
import './Task09.css';

export default function Task09(){
 
    const PER_PAGE = 10;
    const [products,setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    useEffect(() => {
        let skip = (page - 1) * PER_PAGE;
        axios.get(`https://dummyjson.com/products?limit=${PER_PAGE}&skip=${skip}`)
            .then(response => {
                let data = response.data;
                setProducts(data.products);
                let totalPages = Math.ceil( data.total / PER_PAGE);
                setPagesCount(totalPages)
            })
    }, [page]);

    function renderPages(){
        const elements = [];
        for(let i = 1; i <= pagesCount; i++){
            elements.push(<li onClick={() => setPage(i)} className={'page'} key={i}>{i}</li>)
        }
        return <ul>{elements}</ul>
    }

    function renderProducts(){
        return products.map(p => <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.price} $ </td>
            <td>{p.stock}</td>
            <td>
                <button onClick={() =>{
                    let index = products.indexOf(prod => prod.id == p.id);
                    let prods = [...products];
                    prods.splice(index, 1);
                    setProducts(prods);
                }}>Delete</button>
            </td>
            <td>
                <img src={p.thumbnaiil} style={{width:50, height:50}}/>
            </td>
        </tr>)
    }

    return(
        <div className="Task09">
             <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Image</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {renderProducts()}
                    <tr>
                        <td colSpan={6}>
                            {renderPages()}
                        </td>
                    </tr>
                </tbody>
             </table>
        </div>
    )
}