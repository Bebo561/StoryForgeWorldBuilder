import { useState } from 'react';
import Select from 'react-select';
import './Styles/StatsPage.css';

export default function StatsPage(){
    var [raceInput, handleRaceInput] = useState('');
    var [classInput, handleClassInput] = useState('');
    var [alignmentInput, handleAlignmentInput] = useState('');
    var [additionalQueries, handleAdditionalQueries] = useState('');


    const alignmentOptions = [
        { value: 'Lawful Good', label: 'Lawful Good' },
        { value: 'Neutral Good', label: 'Neutral Good' },
        { value: 'Chaotic Good', label: 'Chaotic Good' },
        { value: 'Lawful Neutral', label: 'Lawful Neutral' },
        { value: 'True Neutral', label: 'True Neutral' },
        { value: 'Chaotic Neutral', label: 'Chaotic Neutral' },
        { value: 'Lawful Evil', label: 'Lawful Evil' },
        { value: 'Neutral Evil', label: 'Neutral Evil' },
        { value: 'Chaotic Evil', label: 'Choatic Evil' }
      ];

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
    
    const classOptions = [
        { value: 'Barbarian', label: 'Barbarian' },
        { value: 'Bard', label: 'Bard' },
        { value: 'Cleric', label: 'Cleric' },
        { value: 'Druid', label: 'Druid' },
        { value: 'Fighter', label: 'Fighter' },
        { value: 'Monk', label: 'Monk' },
        { value: 'Paladin', label: 'Paladin' },
        { value: 'Ranger', label: 'Ranger' },
        { value: 'Rogue', label: 'Rogue' },
        { value: 'Sorcerer', label: 'Sorcerer' },
        { value: 'Warlock', label: 'Warlock' },
        { value: 'Wizard', label: 'Wizard' }
    ]
    return (
        <>
            <div id="HomeBG" className="StatsBG">
                <h1 id="NameHeader">Stat Randomizer</h1>
                <p id="HomeHeaderHelper">Enter the character's race, class, and optional additional details. We'll handle the rest.</p>
                <div id="HomeForm">
                    <h3 id="StatsFormSubheaderOne" className="Statsheader">Select Class</h3>
                    <Select
                        className="StatsSelect"
                        options={classOptions}
                        onChange={(selectedOption) => handleClassInput(selectedOption.value)}
                        placeholder="Class"
                    />
                    <h3 id="StatsFormSubheaderTwo" className="Statsheader">Select Race</h3>
                    <Select
                        className="StatsSelect"
                        options={raceOptions}
                        onChange={(selectedOption) => handleRaceInput(selectedOption.value)}
                        placeholder="Race"
                    />
                    <h3 id='StatsFormSubheaderThree' className="Statsheader">Enter Alignment</h3>
                    <Select
                        className="StatsSelect"
                        options={alignmentOptions}
                        onChange={(selectedOption) => handleAlignmentInput(selectedOption.value)}
                        placeholder="Alignment"
                    />
                    <h3 id="StatsInputLabel" className="Statsheader">Addiontal Queries</h3>
                    <input type="text" placeholder='Ex: High Strength' id="StatsInput" onChange={(e) => handleAdditionalQueries(e.target.value)}></input>
                    <button id="StatsButton">Submit</button>
                </div>
            </div>
        </>
    )
}