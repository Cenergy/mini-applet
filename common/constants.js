export const a=1;
let tempURL;
if(process.env.NODE_ENV === 'development'){
   tempURL="http://localhost:8000"
}else{
    tempURL="https://api.aigisss.com"
}
export const baseURL=tempURL