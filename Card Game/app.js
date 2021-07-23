class Cards {
  constructor() {
    this.cards = {
      "2C": {
        id: "2C",
        number: 2,
        src: "./assets/2C.png",
      },
      "2S": {
        id: "2S",
        number: 2,
        src: "./assets/2S.png",
      },
      "3C": {
        id: "3C",
        number: 3,
        src: "./assets/3C.png",
      },
      "3S": {
        id: "3S",
        number: 3,
        src: "./assets/3S.png",
      },
      "4C": {
        id: "4C",
        number: 4,
        src: "./assets/4C.png",
      },
      "4S": {
        id: "4S",
        number: 4,
        src: "./assets/4S.png",
      },
      "5C": {
        id: "5C",
        number: 5,
        src: "./assets/5C.png",
      },
      "5S": {
        id: "5S",
        number: 5,
        src: "./assets/5S.png",
      },
      "6C": {
        id: "6C",
        number: 6,
        src: "./assets/6C.png",
      },
      "6S": {
        id: "6S",
        number: 6,
        src: "./assets/6S.png",
      },
      "7C": {
        id: "7C",
        number: 7,
        src: "./assets/7C.png",
      },
      "7S": {
        id: "7S",
        number: 7,
        src: "./assets/7S.png",
      },
      "8C": {
        id: "8C",
        number: 8,
        src: "./assets/8C.png",
      },
      "8S": {
        id: "8S",
        number: 8,
        src: "./assets/8S.png",
      },
      "9C": {
        id: "9C",
        number: 9,
        src: "./assets/9C.png",
      },
      "9S": {
        id: "9S",
        number: 9,
        src: "./assets/9S.png",
      },
      "10C": {
        id: "10C",
        number: 10,
        src: "./assets/10C.png",
      },
      "10S": {
        id: "10S",
        number: 10,
        src: "./assets/10S.png",
      },
      "11C": {
        id: "11C",
        number: 11,
        src: "./assets/QC.png",
      },
      "11S": {
        id: "11S",
        number: 11,
        src: "./assets/QS.png",
      },
      "12C": {
        id: "12C",
        number: 12,
        src: "./assets/JC.png",
      },
      "12S": {
        id: "12S",
        number: 12,
        src: "./assets/JS.png",
      },
      "13C": {
        id: "13C",
        number: 13,
        src: "./assets/KC.png",
      },
      "13S": {
        id: "13S",
        number: 13,
        src: "./assets/KS.png",
      },
      "14C": {
        id: "14C",
        number: 14,
        src: "./assets/AC.png",
      },
      "14S": {
        id: "14S",
        number: 14,
        src: "./assets/AS.png",
      },
    };
    this.keyCards = [
      "2C",
      "2S",
      "3C",
      "3S",
      "4C",
      "4S",
      "5C",
      "5S",
      "6C",
      "6S",
      "7C",
      "7S",
      "8C",
      "8S",
      "9C",
      "9S",
      "10C",
      "10S",
      "11C",
      "11S",
      "12C",
      "12S",
      "13C",
      "13S",
      "14C",
      "14S",
    ];
  }
}

class UserInterface {
  constructor() {
    this.message = document.querySelector("#message");
    this.playerOneFrontCard = document.querySelector("#playerOne .front__card");
    this.playerTwoFrontCard = document.querySelector("#playerTwo .front__card");
    this.playerTwoBackCard = document.querySelector("#playerTwo");
  }

  showCardsPlayed(cardOne, CardTwo) {
    this.playerOneFrontCard.innerHTML = `<img src=${cardOne.src} alt="cardOne" />`;
    this.playerTwoFrontCard.innerHTML = `<img src=${CardTwo.src} alt="cardOne" />`;
  }
}

class Play {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.keysPlayerOne = Object.keys(playerOne);
    this.keysPlayerTwo = Object.keys(playerTwo);
    this.playerOneStr = "playerOne";
    this.playerTwoStr = "playerTwo";
  }

  playCards(playerOneKey, playerTwoKey) {
    if (this.keysPlayerOne.length + this.keysPlayerTwo.length == 0)
      return "Its a DRAW";
    if (this.keysPlayerOne.length == 0) return "Game Over! YOU WON ";
    if (this.keysPlayerTwo.length == 0) return "Game Over! COMPUTER WON ";

    this.checkHigherCardPoint(
      this.playerOne[playerOneKey],
      this.playerTwo[playerTwoKey]
    );
  }

  checkHigherCardPoint(playerOneCard, playerTwoCard) {
    if (playerOneCard.number > playerTwoCard.number) {
      this.deleteCard(playerTwoCard.id, this.playerTwoStr);

      return "Player Two Lost";
    }

    if (playerOneCard.number < playerTwoCard.number) {
      this.deleteCard(playerOneCard.id, this.playerOneStr);

      return "Player One Lost";
    }

    this.keepCards(playerTwoCard.id);
  }

  keepCards(key) {
    this.keysPlayerOne = this.keysPlayerOne.filter((unit) => {
      return unit !== key;
    });

    this.keysPlayerTwo = this.keysPlayerTwo.filter((unit) => {
      return unit !== key;
    });
  }

  deleteCard(cardToDelete, player) {
    if (player == "playerTwo") {
      const twoPlayerKeys = this.keysPlayerTwo.filter((unit) => {
        return unit !== cardToDelete;
      });

      this.keysPlayerTwo = twoPlayerKeys;
      return;
    }

    const onePlayerKeys = this.keysPlayerOne.filter((unit) => {
      return unit !== cardToDelete;
    });

    this.keysPlayerOne = onePlayerKeys;
  }

  getPlayersKeys() {
    return {
      keysPlayerOne: this.keysPlayerOne,
      keysPlayerTwo: this.keysPlayerTwo,
    };
  }
}

function App(Cards, UserInterface) {
  const cards = new Cards();
  const ui = new UserInterface();
  const allCards = cards.cards;
  const play = new Play({ ...allCards }, { ...allCards });

  function eventListeners() {
    ui.playerTwoBackCard.addEventListener("click", populateCards);
  }

  function populateCards() {
    const { keysPlayerOne, keysPlayerTwo } = play.getPlayersKeys();

    const lengthOfCardsOne = keysPlayerOne.length - 1;
    const lengthOfCardsTwo = keysPlayerTwo.length - 1;

    const shuffleCardKeyOne = keysPlayerOne.sort((a, b) => 0.5 - Math.random());
    const shuffleCardKeyTwo = keysPlayerTwo.sort((a, b) => 0.5 - Math.random());

    const randomOne = Math.floor(Math.random() * lengthOfCardsOne);
    const randomTwo = Math.floor(Math.random() * lengthOfCardsTwo);

    play.playCards(shuffleCardKeyOne[randomOne], shuffleCardKeyTwo[randomTwo]);
    ui.showCardsPlayed(
      allCards[shuffleCardKeyOne[randomOne]],
      allCards[shuffleCardKeyTwo[randomTwo]]
    );
  }

  return {
    init() {
      eventListeners();
    },
  };
}

const app = App(Cards, UserInterface);
app.init();

/*
check who got the hightiest card
the player with greater card keep the his card
the player with the lower card lose his card
in case of with draw both lose their card
the last to keep card win


*/
