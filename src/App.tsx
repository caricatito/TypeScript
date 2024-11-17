import { Miprimercomponent } from "./component/primercomponent/Miprimercomponent"
import { Componentcounter } from "./component/ComponentCounter/Componentcounter"
import { ComponentUseEfect } from "./component/ComponentUseEfect/ComponentUseEfect";
import { FormComponent } from "./component/formComponent/FormComponent";
import { AppProduct } from "./component/AppProduct/AppProduct";

export const App = () => {
    return (
    <div style={{display: 'flex', flexDirection: 'column', gap:'2vh'}}>
    <Miprimercomponent text={"Texto desde propiedades"} color={"red"} fontSize={5}/> 
    <Componentcounter/>
    <ComponentUseEfect/>
     <FormComponent/>
    <AppProduct/>
    </div>
  );
}
