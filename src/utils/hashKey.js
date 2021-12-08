import md5 from 'md5';

export default function hashData(){
    return md5(
        process.env.REACT_APP_TIMESTAMP + 
        process.env.REACT_APP_PRIVATE_API_KEY + 
        process.env.REACT_APP_PUBLIC_API_KEY
    );
}