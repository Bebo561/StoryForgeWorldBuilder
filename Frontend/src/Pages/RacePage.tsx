import React, {useState} from 'react';
import './Styles/RacePage.css'

export default function RacePage(){
    var [excludedRaces, updateExcludedRaces] = useState<string[]>([]);

    const onCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        var option = event.target.value;
        // If the option is already included in the array, remove it.
        if (excludedRaces.includes(option)) {
            updateExcludedRaces(excludedRaces.filter(item => item !== option));
        }
        // Else, place it in the array
        else {
            updateExcludedRaces(prevExcludedRaces => [...prevExcludedRaces, option]);
            console.log(excludedRaces)
        }
    }
        
    return(
        <>
            <div id="HomeBG">
            <h1 id="NameHeader">Race Randomizer</h1>
            <p id="HomeHeaderHelper">Randomly picks a race for your character, option to exclude certain races</p>
                <div id="HomeForm">
                    <h3 id="NameFormHeader">Excluded Races</h3>
                    <div id="OptionsHolder">
                    <div className="CheckboxOptions">
                            <input type="checkbox" id="Human" value="Human" onChange={onCheckBox}/> 
                            <label htmlFor="Human" id="CheckboxLabel">Human</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Elf" value="Elf" onChange={onCheckBox}/> 
                            <label htmlFor="Elf" id="CheckboxLabel">Elf</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Drawf" value="Dwarf" onChange={onCheckBox}/> 
                            <label htmlFor="Dwarf" id="CheckboxLabel">Dwarf</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Gnome" value="Gnome" onChange={onCheckBox}/> 
                            <label htmlFor="Gnome" id="CheckboxLabel">Gnome</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Half-Elf" value="Half-Elf" onChange={onCheckBox}/> 
                            <label htmlFor="Half-Elf" id="CheckboxLabel">Half-Elf</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Half-Orc" value="Half-Orc" onChange={onCheckBox}/> 
                            <label htmlFor="Half-Orc" id="CheckboxLabel">Half-Orc</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Tiefling" value="Tiefling" onChange={onCheckBox}/> 
                            <label htmlFor="Tiefling" id="CheckboxLabel">Tiefling</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Dragonborn" value="Dragonborn" onChange={onCheckBox}/> 
                            <label htmlFor="Dragonborn" id="CheckboxLabel">Dragonborn</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Goliath" value="Goliath" onChange={onCheckBox}/> 
                            <label htmlFor="Goliath" id="CheckboxLabel">Goliath</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Aasimar" value="Aasimar" onChange={onCheckBox}/> 
                            <label htmlFor="Aasimar" id="CheckboxLabel">Aasimar</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Firbolg" value="Firbolg" onChange={onCheckBox}/> 
                            <label htmlFor="Firbolg" id="CheckboxLabel">Firbolg</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Kenku" value="Kenku" onChange={onCheckBox}/> 
                            <label htmlFor="Kenku" id="CheckboxLabel">Kenku</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Tabaxi" value="Tabaxi" onChange={onCheckBox}/> 
                            <label htmlFor="Tabaxi" id="CheckboxLabel">Tabaxi</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Triton" value="Triton" onChange={onCheckBox}/> 
                            <label htmlFor="Triton" id="CheckboxLabel">Triton</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Air Genasi" value="Air Genasi" onChange={onCheckBox}/> 
                            <label htmlFor="Air Genasi" id="CheckboxLabel">Air Genasi</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Earth Genasi" value="Earth Genasi" onChange={onCheckBox}/> 
                            <label htmlFor="Earth Genasi" id="CheckboxLabel">Earth Genasi</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Fire Genasi" value="Fire Genasi" onChange={onCheckBox}/> 
                            <label htmlFor="Fire Genasi" id="CheckboxLabel">Fire Genasi</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Water Genasi" value="Water Genasi" onChange={onCheckBox}/> 
                            <label htmlFor="Water Genasi" id="CheckboxLabel">Water Genasi</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Lizardfolk" value="Lizardfolk" onChange={onCheckBox}/> 
                            <label htmlFor="Lizardfolk" id="CheckboxLabel">Lizardfolk</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Yuan-ti Pureblood" value="Yuan-ti Pureblood" onChange={onCheckBox}/> 
                            <label htmlFor="Yuan-ti Pureblood" id="CheckboxLabel">Yuan-ti Pureblood</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Gith" value="Gith" onChange={onCheckBox}/> 
                            <label htmlFor="Gith" id="CheckboxLabel">Gith</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Warforged" value="Warforged" onChange={onCheckBox}/> 
                            <label htmlFor="Warforged" id="CheckboxLabel">Warforged</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Aarakocra" value="Aarakocra" onChange={onCheckBox}/> 
                            <label htmlFor="Aarakocra" id="CheckboxLabel">Aarakocra</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Tortle" value="Tortle" onChange={onCheckBox}/> 
                            <label htmlFor="Tortle" id="CheckboxLabel">Tortle</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Hobgoblin" value="Hobgoblin" onChange={onCheckBox}/> 
                            <label htmlFor="Hobgoblin" id="CheckboxLabel">Hobgoblin</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Goblin" value="Goblin" onChange={onCheckBox}/> 
                            <label htmlFor="Goblin" id="CheckboxLabel">Goblin</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Bugbear" value="Bugbear" onChange={onCheckBox}/> 
                            <label htmlFor="Bugbear" id="CheckboxLabel">Bugbear</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Orc" value="Orc" onChange={onCheckBox}/> 
                            <label htmlFor="Orc" id="CheckboxLabel">Orc</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Kobold" value="Kobold" onChange={onCheckBox}/> 
                            <label htmlFor="Kobold" id="CheckboxLabel">Kobold</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Gnome" value="Gnome" onChange={onCheckBox}/> 
                            <label htmlFor="Gnome" id="CheckboxLabel">Gnome</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Centaur" value="Centaur" onChange={onCheckBox}/> 
                            <label htmlFor="Centaur" id="CheckboxLabel">Centaur</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Satyr" value="Satyr" onChange={onCheckBox}/> 
                            <label htmlFor="Satyr" id="CheckboxLabel">Satyr</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Leonin" value="Leonin" onChange={onCheckBox}/> 
                            <label htmlFor="Leonin" id="CheckboxLabel">Leonin</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Minotaur" value="Minotaur" onChange={onCheckBox}/> 
                            <label htmlFor="Minotaur" id="CheckboxLabel">Minotaur</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Vedalken" value="Vedalken" onChange={onCheckBox}/> 
                            <label htmlFor="Vedalken" id="CheckboxLabel">Vedalken</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Simic Hybrid" value="Simic Hybrid" onChange={onCheckBox}/> 
                            <label htmlFor="Simic Hybrid" id="CheckboxLabel">Simic Hybrid</label>
                        </div>
                        <div className="CheckboxOptions">
                            <input type="checkbox" id="Loxodon" value="Loxodon" onChange={onCheckBox}/> 
                            <label htmlFor="Loxodon" id="CheckboxLabel">Loxodon</label>
                        </div>
                    </div>
                    <button id="RacePageButton" >Randomize</button>
                </div>
            </div>
        </>
    )
}