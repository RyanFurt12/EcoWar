export default async function getUser(){
    const user = sessionStorage.user;
    if (user) return JSON.parse(user);
    
    const token = localStorage.getItem('token')?.replaceAll('"', '');
    if(token) {
        try {
            const response = await fetch("/api/auth", {
              method: "POST", 
              headers: {  
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token })
            });
        
            if (!response.ok) {
              const data = await response.json();
              console.error(data.error || "Erro na requisição");
              return;
            }
        
            const data = await response.json();
            sessionStorage.setItem('user', JSON.stringify(data.user))            
            return data.user;

        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }
    sessionStorage.removeItem('user');
    localStorage.removeItem('token');
    window.location.href = '/login';
}