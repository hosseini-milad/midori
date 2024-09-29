import React, { useRef ,useEffect, useState} from 'react';
import StyleInput from '../../../components/Button/Input';
import tabletrans from '../../../translate/tables';
import ImageSimple from '../../../components/Button/ImageSimple';
import env from '../../../env';
import RichTextEditor from '../../../components/Button/RichTextEditor';

function ProductName(props){
    const content =props.content?props.content.filter:''
    
    const [image,setImage]= useState();
    const [footer,setFooter]= useState();
    //const [imageUrl,setImageUrl] = useState('')
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:image&&image.base64,
                              imgName:image&&image.fileName,
                            folderName:"product"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      image&&fetch(env.siteApi+"/panel/product/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            props.setProductChange(prevState => ({
              ...prevState,
              imageUrl:result.url
            }))
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[image])
    useEffect(() => {
      const postOptions={
          method:'post',
          headers: {
              "content-type": "application/json"
          },
          body:JSON.stringify({base64image:footer&&footer.base64,
                              imgName:footer&&footer.fileName,
                            folderName:"product"})
      }//URL.createObjectURL(image)
      //console.log(postOptions)
      footer&&fetch(env.siteApi+"/panel/product/upload",postOptions)
          .then(res => res.json())
          .then(
          (result) => {
            props.setProductChange(prevState => ({
              ...prevState,
              footerUrl:result.url
            }))
          },
          (error) => {
              console.log(error);
          }
          )
          .catch((error)=>{
          console.log(error)
          })

      },[footer])
    
      //console.log(props.productChange)
    return(
        <div className="pd-row">
          <div className="row-title">
            <h4>{tabletrans.details[props.lang]}</h4>
            <p>{tabletrans.titleShort[props.lang]}</p>
            
          </div>
          <div className="row-box">
            <div className="details-wrapper">
                <StyleInput title={tabletrans.productName[props.lang]} direction={props.direction}
                 class={"formInput"} defaultValue={content?content.title:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    title:e
                  }))}/>
                  <StyleInput title={tabletrans.productCode[props.lang]} direction={props.direction}
                 class={"formInput"} defaultValue={content?content.url:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    url:e
                  }))}/>
                  <StyleInput title="range Text" direction={props.direction}
                 class={"formInput"} defaultValue={content?content.rangeText:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    rangeText:e
                  }))}/>
                  <StyleInput title="advantage Text" direction={props.direction}
                 class={"formInput"} defaultValue={content?content.advantageText:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    advantageText:e
                  }))}/>
                <StyleInput title={tabletrans.footerText[props.lang]} direction={props.direction}
                 class={"formInput"} defaultValue={content?content.footer:''} 
                 action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    footer:e
                  }))}/>
                
              <div className="contentTextEditor">
                <textarea placeholder={tabletrans.productMeta[props.lang]} 
                defaultValue={content?content.metaTitle:''} 
                onChange={(e)=>props.setProductChange(prevState => ({
                   ...prevState, 
                   metaTitle:e.target.value
                 }))}/>
              </div>
              <div className="contentTextEditor">
                <label htmlFor="name">{tabletrans.advantages[props.lang]}</label>
                <RichTextEditor content={content} value={"advantages"}
                  setProductChange={props.setProductChange} 
                  action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    advantages:e
                    }))} height={200}/>
              </div>
              {/*<div className="contentTextEditor">
                <label htmlFor="name">{tabletrans.fullDescription[props.lang]}</label>
                <RichTextEditor content={content} value={"fullDesc"}
                  setProductChange={props.setProductChange} 
                  action={(e)=>props.setProductChange(prevState => ({
                    ...prevState,
                    fullDesc:e
                    }))}/>
                  </div>*/}
              <hr/>
              <div className="images">
                <h5>{tabletrans.images[props.lang]}</h5>
                <ImageSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setImage} part={1}
                    />
                <img src={props.productChange.imageUrl?env.siteApiUrl+props.productChange.imageUrl:
                  (content?(env.siteApiUrl+content.imageUrl):'')} 
                  alt={content?content.title:env.default}/>
              </div>
              <div className="images">
                <h5>Footer image</h5>
                <ImageSimple cardName="Input Image" imageGallery={[]} 
                    setImage={setFooter} part={2}/>
                <img src={props.productChange.footerUrl?env.siteApiUrl+props.productChange.footerUrl:
                  (content?(env.siteApiUrl+content.footerUrl):'')} 
                  alt={content?content.title:env.default}/>
              </div>
            </div>
          </div>
        </div>
    )
}
export default ProductName