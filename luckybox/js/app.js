const language = window.navigator.language;

//Menu dos países
var menuBrazil = document.querySelector('#menuBrazil');
var menuCanada = document.querySelector('#menuCanada');
var menuColombia = document.querySelector('#menuColombia');
var menuFrance = document.querySelector('#menuFrance');
var menuGermany = document.querySelector('#menuGermany');

var menuItaly = document.querySelector('#menuItaly');
var menuMalaysia = document.querySelector('#menuMalaysia');
var menuMexico = document.querySelector('#menuMexico');
var menuNetherlands = document.querySelector('#menuNetherlands');
var menuNewZealand = document.querySelector('#menuNewZealand');

var menuPortugal = document.querySelector('#menuPortugal');
var menuSouthAfrica = document.querySelector('#menuSouthAfrica');
var menuSpain = document.querySelector('#menuSpain');
var menuUnitedStates = document.querySelector('#menuUnitedStates');
var menuUnitedKingdom = document.querySelector('#menuUnitedKingdom');

//Rodapé

var footBrazil = document.querySelector('#footBrazil');
var footCanada = document.querySelector('#footCanada');
var footColombia = document.querySelector('#footColombia');
var footFrance = document.querySelector('#footFrance');
var footGermany = document.querySelector('#footGermany');

var footItaly = document.querySelector('#footItaly');
var footMalaysia = document.querySelector('#footMalaysia');
var footMexico = document.querySelector('#footMexico');
var footNetherlands = document.querySelector('#footNetherlands');
var footNewZealand = document.querySelector('#footNewZealand');

var footPortugal = document.querySelector('#footPortugal');
var footAfrica = document.querySelector('#footAfrica');
var footSpain = document.querySelector('#footSpain');
var footUnitedStates = document.querySelector('#footUnitedStates');
var footUnitedKingdom = document.querySelector('#footUnitedKingdom');

var footText = document.querySelector('#footText');

//Corpo da página

var home = document.querySelector('#home');
var countries = document.querySelector('#navbarDropdown');
//var carrossel = document.querySelector('#carrossel');
var divHidden = document.querySelector('#divHidden');
var recommendedOffers = document.querySelector('.text-center');

var offer1 = document.querySelector('#offer1');
var card1 = document.querySelector('#card1');
var cardText1 = document.querySelector('#cardText1');
var buttonOffer1 = document.querySelector('#buttonOffer1');

var offer2 = document.querySelector('#offer2');
var card2 = document.querySelector('#card2');
var cardText2 = document.querySelector('#cardText2');
var buttonOffer2 = document.querySelector('#buttonOffer2');

var offer3 = document.querySelector('#offer3');
var card3 = document.querySelector('#card3');
var cardText3 = document.querySelector('#cardText3');
var buttonOffer3 = document.querySelector('#buttonOffer3');

var offer4 = document.querySelector('#offer4');
var card4 = document.querySelector('#card4');
var cardText4 = document.querySelector('#cardText4');
var buttonOffer4 = document.querySelector('#buttonOffer4');

var offer5 = document.querySelector('#offer5');
var card5 = document.querySelector('#card5');
var cardText5 = document.querySelector('#cardText5');
var buttonOffer5 = document.querySelector('#buttonOffer5');

var offer6 = document.querySelector('#offer6');
var card6 = document.querySelector('#card6');
var cardText6 = document.querySelector('#cardText6');
var buttonOffer6 = document.querySelector('#buttonOffer6');

if (language == 'pt-BR'){
	home.textContent = "Início";
	countries.textContent = 'Países';
	recommendedOffers.textContent = 'OFERTAS RECOMENDADAS';
	footText.textContent = 'Toda semana novas ofertas em novos países.';
	menuBrazil.textContent = 'Brasil';
	footBrazil.textContent = 'Brasil';
	menuCanada.textContent = 'Canadá';
	footCanada.textContent = 'Canadá';
	cardText1.textContent = 'Insira seu número de telefone para concorrer a um iPhone 14. Oferta disponível apenas no Reino Unido.';
	cardText2.textContent = 'Insira seu número de telefone para concorrer a um Samsung Galaxy S22. Oferta disponível apenas na Nova Zelândia.';
	cardText3.textContent = 'Insira seus dados para concorrer a um Playstation 5. Oferta disponível apenas na Holanda.';
	cardText4.textContent = 'Insira seu número de telefone para concorrer a um iPhone 13. Oferta disponível apenas na Nova Zelândia.';
	cardText5.textContent = 'Insira seu número de telefone para concorrer a um Samsung Galaxy S21. Oferta disponível apenas na Colômbia.';
	cardText6.textContent = 'Insira seu número de telefone para concorrer a um Xbox Series X. Oferta disponível apenas na África do Sul.';
	buttonOffer1.textContent = 'CONFIRA';
	buttonOffer2.textContent = 'CONFIRA';
	buttonOffer3.textContent = 'CONFIRA';
	buttonOffer4.textContent = 'CONFIRA';
	buttonOffer5.textContent = 'CONFIRA';
	buttonOffer6.textContent = 'CONFIRA';

function brazilOffers(){
	divHidden.setAttribute('hidden','');
		
	offer1.setAttribute('src','images/Brazil/1.png');
	card1.textContent='1 vale-compra de R$2000';
	cardText1.textContent='Insira seus dados para concorrer a um vale compras de R$2000 do Carrefour. Acesse através de um iOS.';
	buttonOffer1.setAttribute('href','https://tundrafile.com/show.php?l=0&u=700241&id=47978&tracking_id=');
	buttonOffer1.textContent = 'CONFIRA';
		
	offer2.setAttribute('src','images/Brazil/2.png');
	card2.textContent='4 vales-compra de R$500';
	cardText2.textContent='Insira seus dados para concorrer a 4 vales-compra de R$500 da Nike. Acesse através de um computador.';
	buttonOffer2.setAttribute('href','https://tundrafile.com/show.php?l=0&u=700241&id=39770&tracking_id=');
	buttonOffer2.textContent = 'CONFIRA';
		
	offer3.setAttribute('src','images/Brazil/3.png');
	card3.textContent='1 ano de conta premium';
	cardText3.textContent='Insira seus dados para concorrer a 1 ano de assinatura premium do Spotify ou Netflix.';
	buttonOffer3.setAttribute('href','https://ridefiles.net/show.php?l=0&u=700241&id=47706&tracking_id=');
	buttonOffer3.textContent = 'CONFIRA';
};
menuBrazil.addEventListener('click',brazilOffers);
footBrazil.addEventListener('click',brazilOffers);
}

else {
	function brazilOffers(){
		divHidden.setAttribute('hidden','');
			
		offer1.setAttribute('src','images/Brazil/1.png');
		card1.textContent='1 purchase voucher of R$2000';
		cardText1.textContent='Insert your data to compete for a R$2000 shopping voucher from Carrefour. Access via an iOS.';
		buttonOffer1.setAttribute('href','https://tundrafile.com/show.php?l=0&u=700241&id=47978&tracking_id=');
			
		offer2.setAttribute('src','images/Brazil/2.png');
		card2.textContent='4 purchase vouchers of R$500';
		cardText2.textContent='Enter your details to be eligible for 4 Nike vouchers worth R$500. Access via a computer.';
		buttonOffer2.setAttribute('href','https://tundrafile.com/show.php?l=0&u=700241&id=39770&tracking_id=');
			
		offer3.setAttribute('src','images/Brazil/3.png');
		card3.textContent='1 year premium account';
		cardText3.textContent='Enter your data to compete for 1 year of Spotify or Netflix premium subscription.';
		buttonOffer3.setAttribute('href','https://ridefiles.net/show.php?l=0&u=700241&id=47706&tracking_id=');
	};
	menuBrazil.addEventListener('click',brazilOffers);
	footBrazil.addEventListener('click',brazilOffers);
}