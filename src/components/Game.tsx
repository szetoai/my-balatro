import { useState } from "react";

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
  return cardImages[r - 2 + s_ind];
}

// MakeDeck: Null -> [List-of Card]
// Creates an initial deck of cards
function MakeDeck() {
  const deck = [];
  for (const s in suits) {
    for (let r = 2; r < 15; r++) {
      deck.push({ rank: r, suit: s, img: GetCardImage(r, suits[s]) });
    }
  }
  return deck;
}

interface HandProps {
  deck: object[];
  handsize: number;
}

// MakeHand: [List-of Card] PosInt-> [List-of Card]
// Creates a hand of a size based on the given PosInt
// from the deck (which is represented by the given [List-of Card])
function MakeHand({ deck, handsize }: HandProps) {
  const hand = [];
  let card = -1;
  for (let x = 0; x < handsize; x++) {
    card = Math.floor(Math.random() * deck.length);
    hand.push(deck[card]);
    deck.splice(card, 1);
  }
  return (
    <div className="hand">
      {hand.map((item) => (
        <img src={item.img}></img>
      ))}
    </div>
  );
}

export { MakeDeck, MakeHand };
