import {useState} from 'react';
import './Styles/ClassPage.css'

export default function ClassPage(){
    var [classPicked, updateClassPicked] = useState<string[]>([]);
    var [playStyleInput, updatePlayStyleInput] = useState('');

    const onCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        var option = event.target.value;
        // If the option is already included in the array, remove it.
        if (classPicked.includes(option)) {
            updateClassPicked(classPicked.filter(item => item !== option));
        }
        // Else, place it in the array
        else {
            updateClassPicked(prevClassPicked => [...prevClassPicked, option]);
            console.log(classPicked)
        }
    }

    return (
        <>
            <div id="HomeBG">
            <h1 id="NameHeader">Class Randomizer</h1>
            <p id="HomeHeaderHelper">Randomly generates a class for your character based upon entered details</p>
            <div id="HomeForm">
                    <h3 id="NameFormHeader">Remove unwanted classes</h3>
                    <div id="OptionsHolder">
                    <div className="CheckboxOptions">
                            <input type="checkbox" id="Barbarian" value="Barbarian" onChange={onCheckBox}/> 
                            <label htmlFor="Barbarian" id="CheckboxLabel">Barbarian</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Bard" value="Bard" onChange={onCheckBox}/> 
                            <label htmlFor="Bard" id="CheckboxLabel">Bard</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Cleric" value="Cleric" onChange={onCheckBox}/> 
                            <label htmlFor="Cleric" id="CheckboxLabel">Cleric</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Druid" value="Druid" onChange={onCheckBox}/> 
                            <label htmlFor="Druid" id="CheckboxLabel">Druid</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Fighter" value="Fighter" onChange={onCheckBox}/> 
                            <label htmlFor="Fighter" id="CheckboxLabel">Fighter</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Monk" value="Monk" onChange={onCheckBox}/> 
                            <label htmlFor="Monk" id="CheckboxLabel">Monk</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Paladin" value="Paladin" onChange={onCheckBox}/> 
                            <label htmlFor="Paladin" id="CheckboxLabel">Paladin</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Ranger" value="Ranger" onChange={onCheckBox}/> 
                            <label htmlFor="Ranger" id="CheckboxLabel">Ranger</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Rogue" value="Rogue" onChange={onCheckBox}/> 
                            <label htmlFor="Rogue" id="CheckboxLabel">Rogue</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Sorcerer" value="Sorcerer" onChange={onCheckBox}/> 
                            <label htmlFor="Sorcerer" id="CheckboxLabel">Bard</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Warlock" value="Warlock" onChange={onCheckBox}/> 
                            <label htmlFor="Warlock" id="CheckboxLabel">Bard</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Wizard" value="Wizard" onChange={onCheckBox}/> 
                            <label htmlFor="Wizard" id="CheckboxLabel">Wizard</label>
                        </div>
                    </div>
                    <p id="PlayStyleDescription">Enter the type of play style you want</p>
                    <input placeholder="Weapon Wielder, Magic User, Healer, etc.." type="text" id="ClassInput" onChange={(e) => updatePlayStyleInput(e.target.value)}></input>
                    <p id="ClassRaceDescription">Enter race of character</p>
                    <input placeholder="Human, elf, etc..." type="text" id="ClassRaceInput" onChange={(e) => updatePlayStyleInput(e.target.value)}></input>
                    <button id="ClassPageButton" >Generate</button>
                </div>
            </div>
        </>
    )
}