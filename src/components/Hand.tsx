import { useEffect, useState } from "react";

// card images:
// 0-12 are hearts
// 13-25 are clubs
// 26-38 are diamonds
// 39-51 are spades
// arranged in rank order
// album stored at: https://postimg.cc/gallery/7qxhHBj/d06f6fd2
// A CardImage is one of:
// -'https://i.postimg.cc/1XQKscRw/tile000.png'
// -'https://i.postimg.cc/RC7RG8GR/tile001.png'
// -'https://i.postimg.cc/jdRh1XFr/tile002.png'
// -'https://i.postimg.cc/zvFFBb3M/tile003.png'
// -'https://i.postimg.cc/fT5vQ9GS/tile004.png'
// -'https://i.postimg.cc/YC9zrS7n/tile005.png'
// -'https://i.postimg.cc/52Rq6MNx/tile006.png'
// -'https://i.postimg.cc/3RMXFCvV/tile007.png'
// -'https://i.postimg.cc/xdNGmFcL/tile008.png'
// -'https://i.postimg.cc/Y911nGN9/tile009.png'
// -'https://i.postimg.cc/fyCYsGrQ/tile010.png'
// -'https://i.postimg.cc/brp1KyLR/tile011.png'
// -'https://i.postimg.cc/dQj2GCtN/tile012.png'
// -'https://i.postimg.cc/xTsL4SmK/tile013.png'
// -'https://i.postimg.cc/7YPg9L5H/tile014.png'
// -'https://i.postimg.cc/mgt7x63K/tile015.png'
// -'https://i.postimg.cc/P59Ydz2J/tile016.png'
// -'https://i.postimg.cc/fbdXytrK/tile017.png'
// -'https://i.postimg.cc/LXMP14dM/tile018.png'
// -'https://i.postimg.cc/pTYFYNx5/tile019.png'
// -'https://i.postimg.cc/C5hfcvLP/tile020.png'
// -'https://i.postimg.cc/Kj03wn1Z/tile021.png'
// -'https://i.postimg.cc/fTb9XgPk/tile022.png'
// -'https://i.postimg.cc/J7xXsWP9/tile023.png'
// -'https://i.postimg.cc/02HJC0gn/tile024.png'
// -'https://i.postimg.cc/0yMKXKPs/tile025.png'
// -'https://i.postimg.cc/yN0gsqDp/tile026.png'
// -'https://i.postimg.cc/t4KZKR4V/tile027.png'
// -'https://i.postimg.cc/G2rBpMYL/tile028.png'
// -'https://i.postimg.cc/9MpDwGtG/tile029.png'
// -'https://i.postimg.cc/yx8kmkv2/tile030.png'
// -'https://i.postimg.cc/nrSM0pWr/tile031.png'
// -'https://i.postimg.cc/59sHxStJ/tile032.png'
// -'https://i.postimg.cc/dtDhDZ7y/tile033.png'
// -'https://i.postimg.cc/NjHLkhkG/tile034.png'
// -'https://i.postimg.cc/DyD8GfsY/tile035.png'
// -'https://i.postimg.cc/0N1jttVY/tile036.png'
// -'https://i.postimg.cc/bv0J4Q5K/tile037.png'
// -'https://i.postimg.cc/1t9tS8h4/tile038.png'
// -'https://i.postimg.cc/9MJfQcCb/tile039.png'
// -'https://i.postimg.cc/wB12Vjby/tile040.png'
// -'https://i.postimg.cc/ZqXcDz1f/tile041.png'
// -'https://i.postimg.cc/nrWcqTsQ/tile042.png'
// -'https://i.postimg.cc/3NNxyzwT/tile043.png'
// -'https://i.postimg.cc/9XgM3XxF/tile044.png'
// -'https://i.postimg.cc/TYyPT8Sj/tile045.png'
// -'https://i.postimg.cc/02LyQWRT/tile046.png'
// -'https://i.postimg.cc/XYd7yfnp/tile047.png'
// -'https://i.postimg.cc/PqHfbCqK/tile048.png'
// -'https://i.postimg.cc/YSxrdtG7/tile049.png'
// -'https://i.postimg.cc/G27c1zxS/tile050.png'
// -'https://i.postimg.cc/KzvZVCBM/tile051.png'
// and represents a card image in Balatro
// Examples
const ACEHEARTS_IMG = "https://i.postimg.cc/dQj2GCtN/tile012.png";
const ACESPADES_IMG = "https://i.postimg.cc/KzvZVCBM/tile051.png";
const TWOCLUBS_IMG = "https://i.postimg.cc/xTsL4SmK/tile013.png";
const NINECLUBS_IMG = "https://i.postimg.cc/C5hfcvLP/tile020.png";
const QUEENDIAMONDS_IMG = "https://i.postimg.cc/0N1jttVY/tile036.png";
// I *really* don't want to make a template for this.

// Ordered in low->high rank values
const cardImages = [
  // hearts
  "https://i.postimg.cc/1XQKscRw/tile000.png",
  "https://i.postimg.cc/RC7RG8GR/tile001.png",
  "https://i.postimg.cc/jdRh1XFr/tile002.png",
  "https://i.postimg.cc/zvFFBb3M/tile003.png",
  "https://i.postimg.cc/fT5vQ9GS/tile004.png",
  "https://i.postimg.cc/YC9zrS7n/tile005.png",
  "https://i.postimg.cc/52Rq6MNx/tile006.png",
  "https://i.postimg.cc/3RMXFCvV/tile007.png",
  "https://i.postimg.cc/xdNGmFcL/tile008.png",
  "https://i.postimg.cc/Y911nGN9/tile009.png",
  "https://i.postimg.cc/fyCYsGrQ/tile010.png",
  "https://i.postimg.cc/brp1KyLR/tile011.png",
  "https://i.postimg.cc/dQj2GCtN/tile012.png",
  // clubs
  "https://i.postimg.cc/xTsL4SmK/tile013.png",
  "https://i.postimg.cc/7YPg9L5H/tile014.png",
  "https://i.postimg.cc/mgt7x63K/tile015.png",
  "https://i.postimg.cc/P59Ydz2J/tile016.png",
  "https://i.postimg.cc/fbdXytrK/tile017.png",
  "https://i.postimg.cc/LXMP14dM/tile018.png",
  "https://i.postimg.cc/pTYFYNx5/tile019.png",
  "https://i.postimg.cc/C5hfcvLP/tile020.png",
  "https://i.postimg.cc/Kj03wn1Z/tile021.png",
  "https://i.postimg.cc/fTb9XgPk/tile022.png",
  "https://i.postimg.cc/J7xXsWP9/tile023.png",
  "https://i.postimg.cc/02HJC0gn/tile024.png",
  "https://i.postimg.cc/0yMKXKPs/tile025.png",
  // diamonds
  "https://i.postimg.cc/yN0gsqDp/tile026.png",
  "https://i.postimg.cc/t4KZKR4V/tile027.png",
  "https://i.postimg.cc/G2rBpMYL/tile028.png",
  "https://i.postimg.cc/9MpDwGtG/tile029.png",
  "https://i.postimg.cc/yx8kmkv2/tile030.png",
  "https://i.postimg.cc/nrSM0pWr/tile031.png",
  "https://i.postimg.cc/59sHxStJ/tile032.png",
  "https://i.postimg.cc/dtDhDZ7y/tile033.png",
  "https://i.postimg.cc/NjHLkhkG/tile034.png",
  "https://i.postimg.cc/DyD8GfsY/tile035.png",
  "https://i.postimg.cc/0N1jttVY/tile036.png",
  "https://i.postimg.cc/bv0J4Q5K/tile037.png",
  "https://i.postimg.cc/1t9tS8h4/tile038.png",
  // spades
  "https://i.postimg.cc/9MJfQcCb/tile039.png",
  "https://i.postimg.cc/wB12Vjby/tile040.png",
  "https://i.postimg.cc/ZqXcDz1f/tile041.png",
  "https://i.postimg.cc/nrWcqTsQ/tile042.png",
  "https://i.postimg.cc/3NNxyzwT/tile043.png",
  "https://i.postimg.cc/9XgM3XxF/tile044.png",
  "https://i.postimg.cc/TYyPT8Sj/tile045.png",
  "https://i.postimg.cc/02LyQWRT/tile046.png",
  "https://i.postimg.cc/XYd7yfnp/tile047.png",
  "https://i.postimg.cc/PqHfbCqK/tile048.png",
  "https://i.postimg.cc/YSxrdtG7/tile049.png",
  "https://i.postimg.cc/G27c1zxS/tile050.png",
  "https://i.postimg.cc/KzvZVCBM/tile051.png",
];

// A Suit is one of:
// - 'hearts'
// - 'clubs'
// - 'diamonds'
// - 'spades'
// and represents one of the four suits in a deck of cards
// Examples
const H = "hearts";
const C = "clubs";
const D = "diamonds";
const S = "spades";
// Template
function SuitTemp(suit) {
  switch (suit) {
    case "hearts":
      break;
    case "clubs":
      break;
    case "diamonds":
      break;
    case "spades":
      break;
  }
}

const suits = ["hearts", "clubs", "diamonds", "spades"];

// A Rank is one of:
// - 14
// - 13
// - 12
// - 11
// - 10
// - 9
// - 8
// - 7
// - 6
// - 5
// - 4
// - 3
// - 2
// and represents a rank in a deck of cards
// (11-14 are Jack, Queen, King, and Ace respectively)
// Examples
const A = 14;
const K = 13;
const Q = 12;
const J = 11;
const TEN = 10;
// Template
function RankTemp(rank) {
  switch (rank) {
    case 14:
      break;
    case 13:
      break;
    case 12:
      break;
    case 11:
      break;
    case 10:
      break;
    case 9:
      break;
    case 8:
      break;
    case 7:
      break;
    case 6:
      break;
    case 5:
      break;
    case 4:
      break;
    case 3:
      break;
    case 2:
      break;
  }
}

// A Card is a {rank: Rank, suit: Suit, img: Image}
// a represents a card in a deck of cards
// Examples
const ACEHEARTS = { rank: A, suit: H, img: ACEHEARTS_IMG };
const ACESPADES = { rank: A, suit: S, img: ACESPADES_IMG };
const NINECLUBS = { rank: 9, suit: C, img: NINECLUBS_IMG };
const TWOCLUBS = { rank: 2, suit: C, img: TWOCLUBS_IMG };
const QUEENDIAMONDS = { rank: Q, suit: D, img: QUEENDIAMONDS_IMG };
// Template
function CardTemp(card) {
  SuitTemp(card.suit);
  RankTemp(card.rank);
  // Just pretend there's a CardImageTemp pls
  // CardImageTemp(card.img);
}

// GetCardImage: Rank Suit -> CardImage
// Returns the appropriate CardImage for the given Rank and Suit.
function GetCardImage(r, s) {
  let s_ind = 13;
  switch (s) {
    case "hearts":
      s_ind = 0;
      break;
    case "clubs":
      s_ind = 13;
      break;
    case "diamonds":
      s_ind = 26;
      break;
    case "spades":
      s_ind = 39;
      break;
  }
  // rank minus two bc ranks start at 2
  return cardImages[r - 2 + s_ind];
}

// MakeDeck: Null -> [List-of Card]
// Creates an initial deck of cards
function MakeDeck() {
  const deck = [];
  for (const s in suits) {
    for (let r = 2; r < 15; r++) {
      deck.push({ rank: r, suit: suits[s], img: GetCardImage(r, suits[s]) });
    }
  }
  return deck;
}

// MakeHand needs the deck and the size of the hand
interface HandProps {
  deck: object[];
  oldHand: object[];
  ahand: object[];
  updateHand: (item: object[]) => void;
  updateAhand: (item: object[]) => void;
  updateDeck: (item: object[]) => void;
}

// MakeHand: [List-of Card] PosInt [() => void] -> <div>
// Creates a hand of a size based on the given PosInt
// from the deck (which is represented by the given [List-of Card])
function MakeHand({
  deck,
  oldHand,
  ahand,
  updateHand,
  updateAhand,
  updateDeck,
}: HandProps) {
  const [activeHand, setActiveHand] = useState(ahand);
  let newHand = [...oldHand];
  // when our hand changes, update its rendering
  useEffect(() => {
    setActiveHand(ahand);
    // if the current hand has less than our handsize, draw cards
    if (oldHand.length < 8) {
      newHand = [...oldHand];
      const newHandInitLength = newHand.length;
      for (let x = 0; x < 8 - newHandInitLength; x++) {
        const card = Math.floor(Math.random() * deck.length);
        newHand = [...newHand, deck[card]];
        deck.splice(card, 1);
      }
      // sort the hand and update local and parent
      newHand = newHand.sort((a, b) => b.rank - a.rank);
      updateHand(newHand);
      // update parent deck with spliced deck
      updateDeck(deck);
    }
  }, [oldHand]);
  // return an image for each card in hand
  return (
    <div className="hand">
      {newHand.map((item, index) => (
        <img
          src={item.img}
          className={
            activeHand.some((x) => x.img === item.img) ? "active" : "inactive"
          }
          onClick={() => {
            let newAhand;
            if (
              // if this card isnt already in activehand and we have <5 cards in activehand
              !activeHand.some((x) => x.img === item.img) &&
              activeHand.length < 5
            ) {
              // add the card into the hand then sort the hand
              newAhand = [...activeHand, item].sort((a, b) => b.rank - a.rank);
            } else {
              // remove the card from the active hand (if it exists)
              newAhand = activeHand.filter((x) => x.img !== item.img);
            }
            // update the active hand and the parents active hand
            setActiveHand(newAhand);
            updateAhand(newAhand);
          }}
          key={index}
        ></img>
      ))}
    </div>
  );
}

// --------------------Hand Type Checks--------------------------------
// A Kind is one of:
// - 4
// - 3
// - 2
// and represents the number of cards of the same rank needed for a "of a kind" hand in Balatro
// ("2 of a kind" is known as a Pair)
// Examples:
const FourKind = 4;
const ThreeKind = 3;
const TwoKind = 2;
// Template
function KindTemp(kind) {
  switch (kind) {
    case 4:
      break;
    case 3:
      break;
    case 2:
      break;
  }
}

// OfAKind: [List-of Rank] Kind -> Boolean
// Determines if a given [List-of Rank] contains the given Kind number of cards of the same rank.
function OfAKind(ranks, kind) {
  return (
    ranks
      // map over each item, determine if there exists another of the same rank in the ranks
      .map(
        (item, index) =>
          // checks if there are at least kind minus 1 other cards of the same rank in ranks
          ranks.toSpliced(index, 1).filter((x) => x === item).length >= kind - 1
      )
      .some((bool) => bool === true)
  );
}

// FullHouse: [List-of Rank] -> Boolean
// Determines if the given [List-of Rank] is a Full House,
// meaning that it contains a 3 of a kind and a Pair (exclusive to each other)
function FullHouse(ranks) {
  if (OfAKind(ranks, 3)) {
    // filters the ranks such that only the ranks that arent a part of the 3 of a kind are left.
    const nonThreeKind = ranks.filter(
      (x) => !(ranks.filter((y) => y === x).length === 3)
    );
    // check if the remaining 2 cards are a pair
    return OfAKind(nonThreeKind, 2);
  } else return false;
}

// Flush: [List-of Suit] -> Boolean
// Determines if the given [List-of Suit] is a flush,
// meaning that it contains 5 cards of the same suit.
function Flush(suits) {
  return suits.length === 5 && suits.every((x) => x === suits[0]);
}

// Straight: [List-of Rank] -> Boolean
// Determines if a given [List-of Rank] is a Straight,
// meaning the elements are all consecutive. Assumes the list is sorted.
// Ace counts as 14 and 1.
function Straight(ranks) {
  if (ranks[0] === 14 && ranks[1] === 5) {
    return Straight(ranks.splice(0, 1));
  } else {
    return ranks
      .map((item, index) => index === 4 || ranks[index + 1] === item - 1)
      .every((item) => item === true);
  }
}

// TwoPair: [List-of Rank] -> Boolean
// Determines if a given [List-of Rank] is a Two Pair,
// meaning the list contains 2 Pairs.
function TwoPair(ranks) {
  return (
    ranks
      // map over each item, determine if there exists another of the same rank in the ranks
      .map((item, index) =>
        ranks.toSpliced(index, 1).some((other) => other === item)
      )
      // filter ranks such that it only contains the ranks that have a pair
      // if there are 4 cards that have a match, it is a two pair
      // (in the real game, 4 of a kind will be checked before two pair)
      .filter((bool) => bool === true).length /
      2 ===
    2
  );
}

// BestHand: [List-of Card] -> String
// Returns the best hand that a given [List-of Card] contains
function BestHand(ahand) {
  if (ahand.length === 0) {
    return "";
  } else {
    const ranks = ahand.map((item) => item.rank);
    const suits = ahand.map((item) => item.suit);

    if (Straight(ranks) && Flush(ranks)) {
      return "Straight Flush";
    } else if (OfAKind(ranks, 4)) {
      return "Four of a Kind";
    } else if (FullHouse(ranks)) {
      return "Full House";
    } else if (Flush(suits)) {
      return "Flush";
    } else if (Straight(ranks)) {
      return "Straight";
    } else if (OfAKind(ranks, 3)) {
      return "Three of a Kind";
    } else if (TwoPair(ranks)) {
      return "Two Pair";
    } else if (OfAKind(ranks, 2)) {
      return "Pair";
    } else return "High Card";
  }
}

// A [Maybe-Number] is one of:
// - Number
// - ""
// Examples
const maybeNum10 = 10;
const maybeNum78 = 78;
const maybeNumStr = "";
// Template
function maybeNumberTemp(maybeNum) {
  if (!isNaN(maybeNum)) {
    return maybeNum;
  } else return maybeNum;
}

// ChipVal: String -> [Maybe-Number]
// Returns the base chip value for the given String
function ChipVal(hand) {
  switch (hand) {
    case "Straight Flush":
      return 100;
    case "Four of a Kind":
      return 60;
    case "Full House":
      return 40;
    case "Flush":
      return 35;
    case "Straight":
    case "Three of a Kind":
      return 30;
    case "Two Pair":
      return 20;
    case "Pair":
      return 10;
    case "High Card":
      return 5;
    default:
      return "";
  }
}

// MultVal: String -> [Maybe-Number]
// Returns the base mult value for the given String
function MultVal(hand) {
  switch (hand) {
    case "Straight Flush":
      return 8;
    case "Four of a Kind":
      return 7;
    case "Full House":
    case "Flush":
    case "Straight":
      return 4;
    case "Three of a Kind":
      return 3;
    case "Two Pair":
    case "Pair":
      return 2;
    case "High Card":
      return 1;
    default:
      return "";
  }
}

interface HandInfoProps {
  ahand: object[];
}

// HandInfo: [List-of Card] -> <img>
// Returns the info of the active hand based on given [List-of Card]
function HandInfo({ ahand }: HandInfoProps) {
  const handType = BestHand(ahand);
  const chips = ChipVal(handType);
  const mult = MultVal(handType);
  return (
    <div className="container">
      <h1 id="handName">{handType}</h1>
      <h1 id="chipCount">{chips}</h1>
      <h1 id="multCount">{mult}</h1>
      <img
        className="ui"
        id="handinfo"
        src="https://i.ibb.co/Qms23nz/handinfo.png"
      />
    </div>
  );
}

export { MakeDeck, MakeHand, HandInfo, BestHand, ChipVal, MultVal };
