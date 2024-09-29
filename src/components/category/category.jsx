import {  Stack } from "@mui/material";
import { colors } from "../../constants/colors";
import {category} from "./../../constants/index"

const Category = ({setselectCatygoryhandler,selectedC}) => {
  return <Stack direction={"row"} sx={{overflowX: "scroll"}}>
    {
    category.map(item =>{
        return(
            <button key={item.name} className="category-btn" style={{borderRadius: "0", background: selectedC == item.name? colors.secondary: ""}} onClick={()=>setselectCatygoryhandler(item.name)}>
                <span style={{ marginRight: "15px" ,color: selectedC == item.name? colors.primary: colors.secondary} }>{item.icon}</span>
                <span style={{opacity: "1" ,color: selectedC == item.name? colors.primary: ""}}>{item.name}</span>
            </button>
        )
    })
    }


  </Stack>;
};

export default Category;
