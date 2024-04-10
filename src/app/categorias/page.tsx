import NavBar from "@/components/NavBar"
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Categorias() {

  async function getCategorias (){
    const resp = await fetch("http://localhost:8080/categoria", {next: { revalidate: 0 }})
    return await resp.json()
  }

  const categorias : Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />
     
      <section className="flex flex-col gap-2 bg-slate-900 mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
          <Link href="/categorias/new">
          <Button color="primary" startContent={<Plus/>}>
            nova categoria
            </Button>
          </Link>
          
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}

      </section>

    </main>
  );
}

// import NavBar from "@/components/NavBar";
// import { Apple, ChevronDown } from "lucide-react";
// import { CategoriaItem } from "./CategoriaItem";
// import { Button } from "@nextui-org/button";

// export default async function Categorias() {
  
//   async function getCategorias(){ //API do BACKEND
//     const resp = await fetch("http://localhost:8080/categoria")
//     const data = await resp.json()
//     console.log(data)
//   }
  
//   const categorias : Array<Categoria> = await getCategorias()

//   return (
//     <main className="flex min-h-screen flex-col items-center">
//       <NavBar active="categorias" />
//       <section className="flex flex-col gap-2 bg-slate-900 mt-4 p-3 rounded min-w-[500]">
//         <div className="flex justify-between gap-8">
//           <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
//           <Button>nova categoria</Button>
//         </div>

//         {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}
//       </section>
//     </main>
//   );
// }