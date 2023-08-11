import {useState} from 'react';
import Select from 'react-select';
import './Styles/ClassPage.css'

export default function ClassPage(){
    var [classPicked, updateClassPicked] = useState<string[]>([]);
    var [playStyleInput, updatePlayStyleInput] = useState('');
    var [raceInput, handleRaceInput] = useState('');

    const raceOptions = [
        { value: 'Human', label: 'Human' },
        { value: 'Elf', label: 'Elf' },
        { value: 'Dwarf', label: 'Dwarf' },
        { value: 'Halfling', label: 'Halfling' },
        { value: 'Gnome', label: 'Gnome' },
        { value: 'Half-Elf', label: 'Half-Elf' },
        { value: 'Half-Orc', label: 'Half-Orc' },
        { value: 'Tiefling', label: 'Tiefling' },
        { value: 'Dragonborn', label: 'Dragonborn' },
        { value: 'Goliath', label: 'Goliath' },
        { value: 'Aasimar', label: 'Aasimar' },
        { value: 'Firbolg', label: 'Firbolg' },
        { value: 'Kenku', label: 'Kenku' },
        { value: 'Tabaxi', label: 'Tabaxi' },
        { value: 'Triton', label: 'Triton' },
        { value: 'Genasi', label: 'Genasi' },
        { value: 'Lizardfolk', label: 'Lizardfolk' },
        { value: 'Yuan-ti Pureblood', label: 'Yuan-ti Pureblood' },
        { value: 'Gith', label: 'Gith' },
        { value: 'Warforged', label: 'Warforged' },
        { value: 'Aarakocra', label: 'Aarakocra' },
        { value: 'Tortle', label: 'Tortle' },
        { value: 'Hobgoblin', label: 'Hobgoblin' },
        { value: 'Bugbear', label: 'Bugbear' },
        { value: 'Goblin', label: 'Goblin' },
        { value: 'Orc', label: 'Orc' },
        { value: 'Kobold', label: 'Kobold' },
        { value: 'Gnome', label: 'Gnome' },
        { value: 'Centaur', label: 'Centaur' },
        { value: 'Satyr', label: 'Satyr' },
        { value: 'Leonin', label: 'Leonin' },
        { value: 'Minotaur', label: 'Minotaur' },
        { value: 'Vedalken', label: 'Vedalken' },
        { value: 'Simic Hybrid', label: 'Simic Hybrid' },
        { value: 'Loxodon', label: 'Loxodon' }
    ]

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
                    <h3 id="ClassRaceDescription">Enter race of character</h3>
                    <Select
                        id="raceSelect"
                        options={raceOptions}
                        onChange={(selectedOption) => handleRaceInput(selectedOption.value)}
                        placeholder="Race"
                    />
                    <h3 id="NameFormHeader" className="ClassPageRemove">Remove unwanted classes</h3>
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
                    <button id="ClassPageButton" >Generate</button>
                </div>
            </div>
        </>
    )
}