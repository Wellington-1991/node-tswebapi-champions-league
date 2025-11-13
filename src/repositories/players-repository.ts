import { IPlayerModel } from "../models/player-model-interface";
import { IStatisticsModel } from "../models/statistics-model-interface";


const dataBaseFake: IPlayerModel[] = [
    {
        id: 1,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "França",
        position: "Atacante",
        statistiscs: { Overall: 92, Pace: 97, Shooting: 90, Passing: 80, Dribbling: 92, Defending: 36, Physical: 78 }
    },
    {
        id: 2,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Noruega",
        position: "Centroavante",
        statistiscs: { Overall: 91, Pace: 89, Shooting: 94, Passing: 66, Dribbling: 78, Defending: 45, Physical: 88 }
    },
    {
        id: 3,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Meia Ofensivo",
        statistiscs: { Overall: 90, Pace: 80, Shooting: 89, Passing: 92, Dribbling: 94, Defending: 34, Physical: 64 }
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Bélgica",
        position: "Meia Central",
        statistiscs: { Overall: 91, Pace: 74, Shooting: 86, Passing: 93, Dribbling: 87, Defending: 64, Physical: 77 }
    },
    {
        id: 5,
        name: "Vinícius Jr.",
        club: "Real Madrid",
        nationality: "Brasil",
        position: "Ponta Esquerda",
        statistiscs: { Overall: 90, Pace: 95, Shooting: 83, Passing: 78, Dribbling: 93, Defending: 35, Physical: 68 }
    },
    {
        id: 6,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "Inglaterra",
        position: "Meia Central",
        statistiscs: { Overall: 88, Pace: 82, Shooting: 82, Passing: 84, Dribbling: 86, Defending: 78, Physical: 83 }
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egito",
        position: "Ponta Direita",
        statistiscs: { Overall: 89, Pace: 90, Shooting: 88, Passing: 81, Dribbling: 90, Defending: 45, Physical: 75 }
    },
    {
        id: 8,
        name: "Neymar Jr.",
        club: "Al Hilal",
        nationality: "Brasil",
        position: "Ponta Esquerda",
        statistiscs: { Overall: 89, Pace: 85, Shooting: 84, Passing: 86, Dribbling: 92, Defending: 37, Physical: 61 }
    },
    {
        id: 9,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Polônia",
        position: "Centroavante",
        statistiscs: { Overall: 90, Pace: 75, Shooting: 91, Passing: 78, Dribbling: 85, Defending: 44, Physical: 82 }
    },
    {
        id: 10,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Atacante",
        statistiscs: { Overall: 88, Pace: 79, Shooting: 91, Passing: 75, Dribbling: 84, Defending: 34, Physical: 77 }
    },
    {
        id: 11,
        name: "Harry Kane",
        club: "Bayern de Munique",
        nationality: "Inglaterra",
        position: "Centroavante",
        statistiscs: { Overall: 90, Pace: 70, Shooting: 93, Passing: 84, Dribbling: 83, Defending: 47, Physical: 82 }
    },
    {
        id: 12,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Espanha",
        position: "Volante",
        statistiscs: { Overall: 89, Pace: 66, Shooting: 77, Passing: 86, Dribbling: 81, Defending: 84, Physical: 85 }
    },
    {
        id: 13,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Holanda",
        position: "Zagueiro",
        statistiscs: { Overall: 89, Pace: 70, Shooting: 60, Passing: 72, Dribbling: 70, Defending: 90, Physical: 86 }
    },
    {
        id: 14,
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nationality: "Bélgica",
        position: "Goleiro",
        statistiscs: { Overall: 90, Pace: 0, Shooting: 0, Passing: 70, Dribbling: 50, Defending: 0, Physical: 0 }
    },
    {
        id: 15,
        name: "Casemiro",
        club: "Manchester United",
        nationality: "Brasil",
        position: "Volante",
        statistiscs: { Overall: 88, Pace: 65, Shooting: 73, Passing: 76, Dribbling: 75, Defending: 88, Physical: 90 }
    },
    {
        id: 16,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croácia",
        position: "Meia Central",
        statistiscs: { Overall: 88, Pace: 73, Shooting: 78, Passing: 89, Dribbling: 90, Defending: 72, Physical: 66 }
    },
    {
        id: 17,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Meia Ofensivo",
        statistiscs: { Overall: 88, Pace: 76, Shooting: 86, Passing: 89, Dribbling: 84, Defending: 65, Physical: 75 }
    },
    {
        id: 18,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Espanha",
        position: "Meia Central",
        statistiscs: { Overall: 86, Pace: 79, Shooting: 73, Passing: 86, Dribbling: 89, Defending: 64, Physical: 68 }
    },
    {
        id: 19,
        name: "Bukayo Saka",
        club: "Arsenal",
        nationality: "Inglaterra",
        position: "Ponta Direita",
        statistiscs: { Overall: 85, Pace: 86, Shooting: 83, Passing: 81, Dribbling: 86, Defending: 61, Physical: 72 }
    },
    {
        id: 20,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brasil",
        position: "Goleiro",
        statistiscs: { Overall: 89, Pace: 0, Shooting: 0, Passing: 70, Dribbling: 50, Defending: 0, Physical: 0 }
    }
];

export const findAllPlayers = async (): Promise<IPlayerModel[]> => {
    return dataBaseFake;
}

export const findPlayerById = async (id: number): Promise<IPlayerModel | undefined> => {

    const player = dataBaseFake.find((player) => player.id === id);

    if (player) {
        return player;
    } else {
        return undefined;
    }
}

export const insertPlayer = async (player: IPlayerModel) => {
    dataBaseFake.push(player);
}

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
    const index = dataBaseFake.findIndex((player) => player.id === id);

    if (index !== -1) {
        dataBaseFake.splice(index, 1);
        return true
    }

    return false;
}

export const findAndModifyPlayer = async (id: number, statistics: IStatisticsModel): Promise<IPlayerModel> => {
    const playerIndex = dataBaseFake.findIndex((player) => player.id === id);

    if (playerIndex !== -1) {
        dataBaseFake[playerIndex].statistiscs = statistics;
    }

    return dataBaseFake[playerIndex];
}
