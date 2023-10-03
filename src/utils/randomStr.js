export const randomCharGenerator = () =>{
    const st = "qwertyuiopsdfgsfhhdftndy"
    const num = Math.floor(Math.random()* st.length);

    return st[num];
} 