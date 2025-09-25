{/*home page*/}

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Bienvenue sur application de Recherche de Recettes</h1>
      <p className="mt-4 justify-center text-center">Cette application vous permet de rechercher des recettes en fonction de vos préférences et de vos besoins alimentaires. Vous pouvez filtrer les recettes par ingrédients, restrictions alimentaires et temps de cuisson.</p>
      <h2 className="mt-8 text-2xl font-bold text-gray-300 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Bientôt disponible</h2>
    </div>
  );
}
