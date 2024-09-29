import React ,{ useState } from "react"
import Status from "../Components/Status"
import  env, { normalPriceCount, rxFindCount } from "../../env"
import ProductQuickDetail from "./ProductComponent/ProductQuickDetail"

function ProductTableRow(props){
  const [openOption,setOpenOption] = useState(0)
  const [checkState,setCheckState] = useState(false)
  const activeAcc = props.index===props.detail
  const product=props.product
  return(<React.Fragment>
        <tr 
            className={activeAcc?"activeAccordion":"accordion"}>
            <td className="checkBoxStyle">
              <input type="checkbox" name="" id="" checked={checkState}
              onChange={(e)=>setCheckState(checkState?false:true)}/></td>
            
            <td>
              <div className="cu-avatar">
                  <img src={product.imageUrl?(env.siteApiUrl+product.imageUrl):env.defaultProduct} 
                  alt={product?product.title:"default"}/>
                  <div className="cu-name" onClick={()=>
                  window.location.href="/products/detail/"+product._id}>
                    <p className="name">{product.title}</p>
                    <p className="email">{product.sku}</p>
                  </div>
                </div>
              </td>
              
              <td>
                <div className="cu-avatar">
                  <p>{product.metaTitle}</p>
                </div>
              </td>
              <td>
                <Status status={product.status} class={"order-status"} 
                  lang={props.lang}/>
              </td>
            <td>
              <div className="more-btn">
              
              </div>
              
            </td>
          </tr>
          </React.Fragment>
    )
}
export default ProductTableRow