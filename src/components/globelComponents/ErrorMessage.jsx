export default function ErrorMessage({message, el}) {
    // console.log(message?.ville.ref.props.value.value)
    let bool1 = message?.length >0
    if (bool1){
        return (
            <p style={{color: "red", fontSize: "12px", margin:"0", padding:"0"}}>{message}</p>     
          );
    }else return
   
}