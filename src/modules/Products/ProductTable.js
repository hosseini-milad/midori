import { useState } from "react"
import tabletrans from "../../translate/tables"
import ProductTableRow from "./ProductTableRow";

function ProductTable(props){
  const productList = props.product
  const lang=props.lang;
  const [detail,showDetail] = useState(-1)
    return(
        <table>
        <thead>
        <tr>
          <th className="checkBoxStyle">
              <input type="checkbox" name="" id=""/></th>
            <th>
              <p>{tabletrans.name[lang]}</p>
              <i></i>
            </th>
            <th>
              <p>{tabletrans.description[lang]}</p>
              <i></i>
            </th>
            <th>
            <p>{tabletrans.status[lang]}</p>
              <i></i>
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {productList&&productList.filter?
            productList.filter.map((product,i)=>(
            <ProductTableRow detail={detail} showDetail={showDetail} 
            product={product} index={i} key={i} lang={lang} stockId={props.store}/>
          )):''}
          
        </tbody>
      </table>

    )
}
export default ProductTable