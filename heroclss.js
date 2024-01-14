//Profile classes to put each characteristic on each character;
//Made by Luiz Felipe K. da Silva;
//01/14/2024;


class CharacterProfile{

    name;
    age;
    type;
    attack;

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    setType(type){
        this.type = type;
    }
    getType(){
        return this.type;
    }
    setAttack(attack){
        this.attack = attack;
    }
    getAttack(){
        return this.attack;
    }
}

class ShowAttributes{
    constructor(CharacterProfile){
        this.characterProfile = CharacterProfile;
    }
    showProfileAttributes(){
        if(this.characterProfile){
            console.log("Detalhes do personagem:");
            console.log(`Nome: ${this.characterProfile.name}`);
            console.log(`Idade: ${this.characterProfile.age}`);
            console.log(`Tipo: ${this.characterProfile.type}`);
            console.log(`Ataque: ${this.characterProfile.attack}\n`);
        }
        else{
            console.log("Dados dos personagens não disponíveis!");
        }
    }
}
class Attack{
    constructor(CharacterProfile){
        this.characterProfile= CharacterProfile;
    }
    attackMove(){
        if (this.characterProfile){
            console.log(`O/A ${this.characterProfile.type} atacou o inimigo usando ${this.characterProfile.attack}.\n`);
        } else {
            console.log("Ataque não disponível");
        }
    }
}

let newCharN1 = new CharacterProfile;
let newCharN2 = new CharacterProfile;
let newCharN3 = new CharacterProfile;
let newCharN4 = new CharacterProfile;

newCharN1.setName("DarkLight");
newCharN1.setAge(30);
newCharN1.setType("guerreiro")
newCharN1.setAttack("espada")

let showProfile = new ShowAttributes(newCharN1);
showProfile.showProfileAttributes();
newCharN2.setName("Kathery");
newCharN2.setAge(22);
newCharN2.setType("ninja");
newCharN2.setAttack("shuriken");

let showProfile2 = new ShowAttributes(newCharN2);
showProfile2.showProfileAttributes();

newCharN3.setName("Asksei-to");
newCharN3.setAge(60);
newCharN3.setType("monge")
newCharN3.setAttack("artes marciais")

let showProfile3 = new ShowAttributes(newCharN3);
showProfile3.showProfileAttributes();

newCharN4.setName("Dimbledork");
newCharN4.setAge(40);
newCharN4.setType("mago")
newCharN4.setAttack("magia")

let showProfile4 = new ShowAttributes(newCharN4);
showProfile4.showProfileAttributes();

let showActtion1 = new Attack(newCharN1);
showActtion1.attackMove();
let showActtion2 = new Attack(newCharN2);
showActtion2.attackMove();
let showActtion3 = new Attack(newCharN3);
showActtion3.attackMove();
let showActtion4 = new Attack(newCharN4);
showActtion4.attackMove();



