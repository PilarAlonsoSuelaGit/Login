// validate.tsx

interface User {
  user: string;
  email: string;
  password: string;
}



export const isEmail =()=>{}
export const isEmpty =(value:User)=>{
  string:let error="";
if (value.user===""){
error="Escribe el nombre de usuario/";
}
if (value.email===""){
  error="Escribe el email/";
  }
  if (value.password===""){
    error="Escribe la contraseña/";
    }
}


