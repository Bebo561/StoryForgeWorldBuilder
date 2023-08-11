import {useState} from 'react';
import Select from 'react-select';
import './Styles/StoryPage.css';

export default function StoryPage() {
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

    var [raceInput, handleRaceInput] = useState('');

    var [occupation, handleOccupation] = useState('');
    var [fromInput, handleFromInput] = useState('');
    var [additionalQueries, handleAdditionalQueries] = useState('');

    return (
        <>
            <div id="HomeBG">
                <h1 id="NameHeader">Story Creator</h1>
                <p id="StoryHeaderHelper">Generates a background story for your character, options can be left blank for a completely random character.</p>
                <div id="HomeForm">
                <h3 className="StoryHeader">Enter race of character</h3>
                <Select
                        id="raceSelect"
                        options={raceOptions}
                        onChange={(selectedOption) => handleRaceInput(selectedOption.value)}
                        placeholder="Race"
                />
                <h3 className="StoryHeader">Character Occupation</h3>
                <input type="text" className="StoryInput" placeholder="Blacksmith, Trader, Adventurer" onChange={(e) => handleOccupation(e.target.value)}></input>
                <h3 className="StoryHeader">Where Character is from</h3>
                <input type="text" className="StoryInput" placeholder="Great Kingdom, Beautiful Forest, Filthy Swamp" onChange={(e) => handleFromInput(e.target.value)}></input>
                <h3 className="StoryHeader">Additional Queries</h3>
                <input type="text" className="StoryInput" placeholder="Ex: Character has a sad past" onChange={(e) => handleAdditionalQueries(e.target.value)}></input>
                <button id="StoryButton">Submit</button>
                </div>
            </div>
        </>
    )
}