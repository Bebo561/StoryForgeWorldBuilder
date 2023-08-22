import './Styles/NameGenerator.css'
import {useState} from 'react';
import axios from 'axios';

export default function NameGenerator(){
    var [racePicked, updateRacePicked] = useState('');
    var [nameInputs, updateNameInputs] = useState('');
    var [loading, updateLoading] = useState(false);
    var [nameResponse, updateNameResponse] = useState('');

    const HandleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        var option = event.target.value;
        updateRacePicked(option);
    }

    const HandleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(racePicked === ''){
            return alert("Please enter the race of the character name you would like to generate.")
        }
        updateLoading(true);

        const nameForm = {
            Race: racePicked,
            Queries: nameInputs
        }
        console.log(nameForm)
        const url = 'http://localhost:5000/NameGenerator';
        axios.post(url, nameForm).then((res) => {
            console.log(res);
            updateLoading(false);
        }).catch((error) => {
            alert(error);
            updateLoading(false);
        })
    }

    return (
        <>
        <div id="HomeBG">
            <h1 id="NameHeader">Name Generator</h1>
            <p id="HomeHeaderHelper">Generate a name for your character by selecting their race, and optional sub prompts</p>
            {!loading && nameResponse === '' &&
                    <div id="HomeForm">
                        <h3 id="NameFormHeader">Race of Character</h3>
                        <div id="OptionsHolder">
                            <div className="CheckboxOptions">
                                <input type="radio" id="Human" name="race" value="Human" onChange={HandleRadio}/> 
                                <label htmlFor="Human" id="CheckboxLabel">Human</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Elf" value="Elf" name="race" onChange={HandleRadio}/> 
                                <label htmlFor="Elf" id="CheckboxLabel">Elf</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Dwarf" name="race" value="Dwarf" onChange={HandleRadio}/> 
                                <label htmlFor="Dwarf" id="CheckboxLabel">Dwarf</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Gnome" name="race" value="Gnome" onChange={HandleRadio}/> 
                                <label htmlFor="Gnome" id="CheckboxLabel">Gnome</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Half-Elf" name="race" value="Half-Elf" onChange={HandleRadio}/> 
                                <label htmlFor="Half-Elf" id="CheckboxLabel">Half-Elf</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Half-Orc" name="race" value="Half-Orc" onChange={HandleRadio}/> 
                                <label htmlFor="Half-Orc" id="CheckboxLabel">Half-Orc</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Tiefling" name="race" value="Tiefling" onChange={HandleRadio}/> 
                                <label htmlFor="Tiefling" id="CheckboxLabel">Tiefling</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Dragonborn" name="race" value="Dragonborn" onChange={HandleRadio}/> 
                                <label htmlFor="Dragonborn" id="CheckboxLabel">Dragonborn</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Goliath" name="race" value="Goliath" onChange={HandleRadio}/> 
                                <label htmlFor="Goliath" id="CheckboxLabel">Goliath</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Aasimar" name="race" value="Aasimar" onChange={HandleRadio}/> 
                                <label htmlFor="Aasimar" id="CheckboxLabel">Aasimar</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Firbolg" name="race" value="Firbolg" onChange={HandleRadio}/> 
                                <label htmlFor="Firbolg" id="CheckboxLabel">Firbolg</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Kenku" name="race" value="Kenku" onChange={HandleRadio}/> 
                                <label htmlFor="Kenku" id="CheckboxLabel">Kenku</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Tabaxi" name="race" value="Tabaxi" onChange={HandleRadio}/> 
                                <label htmlFor="Tabaxi" id="CheckboxLabel">Tabaxi</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Triton" name="race" value="Triton" onChange={HandleRadio}/> 
                                <label htmlFor="Triton" id="CheckboxLabel">Triton</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Air Genasi" name="race" value="Air Genasi" onChange={HandleRadio}/> 
                                <label htmlFor="Air Genasi" id="CheckboxLabel">Air Genasi</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Earth Genasi" name="race" value="Earth Genasi" onChange={HandleRadio}/> 
                                <label htmlFor="Earth Genasi" id="CheckboxLabel">Earth Genasi</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Fire Genasi" name="race" value="Fire Genasi" onChange={HandleRadio}/> 
                                <label htmlFor="Fire Genasi" id="CheckboxLabel">Fire Genasi</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Water Genasi" name="race" value="Water Genasi" onChange={HandleRadio}/> 
                                <label htmlFor="Water Genasi" id="CheckboxLabel">Water Genasi</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Lizardfolk" name="race" value="Lizardfolk" onChange={HandleRadio}/> 
                                <label htmlFor="Lizardfolk" id="CheckboxLabel">Lizardfolk</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Yuan-ti Pureblood" name="race" value="Yuan-ti Pureblood" onChange={HandleRadio}/> 
                                <label htmlFor="Yuan-ti Pureblood" id="CheckboxLabel">Yuan-ti Pureblood</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Gith" value="Gith" name="race" onChange={HandleRadio}/> 
                                <label htmlFor="Gith" id="CheckboxLabel">Gith</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Warforged" name="race" value="Warforged" onChange={HandleRadio}/> 
                                <label htmlFor="Warforged" id="CheckboxLabel">Warforged</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Aarakocra" name="race" value="Aarakocra" onChange={HandleRadio}/> 
                                <label htmlFor="Aarakocra" id="CheckboxLabel">Aarakocra</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Tortle" name="race" value="Tortle" onChange={HandleRadio}/> 
                                <label htmlFor="Tortle" id="CheckboxLabel">Tortle</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Hobgoblin" name="race" value="Hobgoblin" onChange={HandleRadio}/> 
                                <label htmlFor="Hobgoblin" id="CheckboxLabel">Hobgoblin</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Goblin" name="race" value="Goblin" onChange={HandleRadio}/> 
                                <label htmlFor="Goblin" id="CheckboxLabel">Goblin</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Bugbear" name="race" value="Bugbear" onChange={HandleRadio}/> 
                                <label htmlFor="Bugbear" id="CheckboxLabel">Bugbear</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Orc" value="Orc" name="race" onChange={HandleRadio}/> 
                                <label htmlFor="Orc" id="CheckboxLabel">Orc</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Kobold" name="race" value="Kobold" onChange={HandleRadio}/> 
                                <label htmlFor="Kobold" id="CheckboxLabel">Kobold</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Gnome" name="race" value="Gnome" onChange={HandleRadio}/> 
                                <label htmlFor="Gnome" id="CheckboxLabel">Gnome</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Centaur" name="race" value="Centaur" onChange={HandleRadio}/> 
                                <label htmlFor="Centaur" id="CheckboxLabel">Centaur</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Satyr" name="race" value="Satyr" onChange={HandleRadio}/> 
                                <label htmlFor="Satyr" id="CheckboxLabel">Satyr</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Leonin" name="race" value="Leonin" onChange={HandleRadio}/> 
                                <label htmlFor="Leonin" id="CheckboxLabel">Leonin</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Minotaur" name="race" value="Minotaur" onChange={HandleRadio}/> 
                                <label htmlFor="Minotaur" id="CheckboxLabel">Minotaur</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Vedalken" name="race" value="Vedalken" onChange={HandleRadio}/> 
                                <label htmlFor="Vedalken" id="CheckboxLabel">Vedalken</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Simic Hybrid" name="race" value="Simic Hybrid" onChange={HandleRadio}/> 
                                <label htmlFor="Simic Hybrid" id="CheckboxLabel">Simic Hybrid</label>
                            </div>
                            <div className="CheckboxOptions">
                                <input type="radio" id="Loxodon" name="race" value="Loxodon" onChange={HandleRadio}/> 
                                <label htmlFor="Loxodon" id="CheckboxLabel">Loxodon</label>
                            </div>
                        </div>
                        <label id="NameInputLabel">Additional Inputs</label>
                        <p id="NameInputLabelHelper">(What should be considered when generating the name)</p>
                        <input type="text" id="NameInput" placeholder="Villain, Hero, Emperor, etc.." onChange={(e) => updateNameInputs(e.target.value)}></input>
                        <button id="HomeButton" onClick={HandleSubmit} >Generate</button>
                    </div>
            }
            {loading &&
                <div id="HomeForm">
                    <h1 id="HomeLoading">Loading..</h1>
                </div>
            }
        </div>
        </>
    )
}