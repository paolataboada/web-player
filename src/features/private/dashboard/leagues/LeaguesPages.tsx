import LeagueCard from "@global/components/cards/LeagueCard";
import Camiseta from "@global/assets/icons/card/Camiseta.svg";

const LeaguesPages = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <LeagueCard 
        type="Liga Publica"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="rosa"
      />
      
      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="verde"
      />
      
      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="celeste"
      />

      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="amarillo"
      />
      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="azul"
      />
      
      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="morado"
      />

      <LeagueCard 
        type="Liga Privada"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="rojo"
      />
      
      
      <LeagueCard 
        type="Liga Private"
        id="A123-456"
        title="FFANTASY"
        creator="FFantasy"
        icon={Camiseta}
        color="negro"
      />
    </div>
  );
};

export default LeaguesPages;