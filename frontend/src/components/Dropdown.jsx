import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import PropTypes from 'prop-types';

const animatedComponents = makeAnimated();

const Tags = [
  { value: "aliens", label: "Aliens" },
  { value: "animals", label: "Animals" },
  { value: "cooking", label: "Cooking" },
  { value: "cross dressing", label: "Cross Dressing" },
  { value: "delinquents", label: "Delinquents" },
  { value: "demons", label: "Demons" },
  { value: "gender swap", label: "Gender Swap" },
  { value: "ghosts", label: "Ghosts" },
  { value: "gyaru", label: "Gyaru" },
  { value: "harem", label: "Harem" },
  { value: "incest", label: "Incest" },
  { value: "loli", label: "Loli" },
  { value: "mafia", label: "Mafia" },
  { value: "magic", label: "Magic" },
  { value: "martial arts", label: "Martial Arts" },
  { value: "military", label: "Military" },
  { value: "monster girls", label: "Monster Girls" },
  { value: "monsters", label: "Monsters" },
  { value: "music", label: "Music" },
  { value: "ninja", label: "Ninja" },
  { value: "office workers", label: "Office Workers" },
  { value: "police", label: "Police" },
  { value: "post apocalyptic", label: "Post-Apocalyptic" },
  { value: "reincarnation", label: "Reincarnation" },
  { value: "reverse harem", label: "Reverse Harem" },
  { value: "samurai", label: "Samurai" },
  { value: "school life", label: "School Life" },
  { value: "shota", label: "Shota" },
  { value: "supernatural", label: "Supernatural" },
  { value: "survival", label: "Survival" },
  { value: "time travel", label: "Time Travel" },
  { value: "traditional games", label: "Traditional Games" },
  { value: "vampires", label: "Vampires" },
  { value: "video games", label: "Video Games" },
  { value: "villainess", label: "Villainess" },
  { value: "virtual reality", label: "Virtual Reality" },
  { value: "zombies", label: "Zombies" },
  { value: "action adventure", label: "Action / Adventure" },
  { value: "adult", label: "Adult" },
  { value: "adventure", label: "Adventure" },
  { value: "bisexual", label: "Bisexual" },
  { value: "comedy", label: "Comedy" },
  { value: "comics adaptations", label: "Comics Adaptations" },
  { value: "coming of age", label: "Coming-of-age" },
  { value: "detective mystery", label: "Detective / Mystery" },
  { value: "doujinshi", label: "Dōjinshi (Self-published)" },
  { value: "drama", label: "Drama" },
  { value: "ecchi erotic", label: "Ecchi / Erotic" },
  { value: "fantasy", label: "Fantasy (includes Isekai)" },
  { value: "gender bender", label: "Gender Bender" },
  { value: "graphic novels", label: "Graphic Novels" },
  { value: "harem", label: "Harem" },
  { value: "historical", label: "Historical / Historical Fiction / Alternative Histories" },
  { value: "horror", label: "Horror" },
  { value: "how to gakushu", label: "How-to / Gakushu" },
  { value: "humorous", label: "Humorous" },
  { value: "legal", label: "Legal" },
  { value: "medical", label: "Medical" },
  { value: "magical", label: "Magical / Magical Girl" },
  { value: "martial arts", label: "Martial Arts" },
  { value: "mecha", label: "Mecha (Machines and Robots)" },
  { value: "monster kaiju", label: "Monster / Kaiju" },
  { value: "nonfiction", label: "Nonfiction" },
  { value: "paranormal", label: "Paranormal" },
  { value: "parody", label: "Parody" },
  { value: "pornographic", label: "Pornographic" },
  { value: "psychological", label: "Psychological" },
  { value: "queer", label: "Queer" },
  { value: "religious", label: "Religious" },
  { value: "romance", label: "Romance" },
  { value: "romantic comedy", label: "Romantic Comedy" },
  { value: "samurai", label: "Samurai" },
  { value: "school", label: "School" },
  { value: "science fiction", label: "Science Fiction (includes Cyberpunk)" },
  { value: "shojo ai", label: "Shōjo-ai (Girls’ Love)" },
  { value: "shonen ai", label: "Shōnen-ai (Boys’ Love, or BL)" },
  { value: "slice of life", label: "Slice of Life" },
  { value: "social issue", label: "Social issue" },
  { value: "sports", label: "Sports" },
  { value: "spy", label: "Spy" },
  { value: "superhero", label: "Superhero" },
  { value: "supernatural", label: "Supernatural" },
  { value: "thriller", label: "Thriller" },
  { value: "tragedy", label: "Tragedy" },
  { value: "transgender", label: "Transgender" },
  { value: "underground", label: "Underground" },
  { value: "war", label: "War" },
  { value: "wordless", label: "Wordless" },
  { value: "yaoi", label: "Yaoi" },
  { value: "yuri", label: "Yuri" }
];

const State = [
  { value: "on going", label: "Ongoing" },
  { value: "completed", label: "Completed" },
  { value: "on hold", label: "On Hold" },
  { value: "cancelled", label: "Cancelled" },
];

const Status = [
  { value: "published", label: "Published" },
  { value: "coming soon", label: "Coming Soon" },
];

const AnimatedMulti = ({onChange, tags}) => {

    const handleChange = (selectedOptions) => {
        onChange(selectedOptions);
    };

    return (
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue=""
            value={tags.map(tag => Tags.find(t => t.value === tag))}
            isMulti
            options={Tags}
            className="rounded-md border-amaranth border text-licorice w-full"
            onChange={handleChange}
        />
    );
};

AnimatedMulti.propTypes = {
    onChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

const SingleOption = ({ isState, onChange, value }) => {
  const stateStatus = isState ? State : Status;

  const handleChange = (selectedOption) => {
    onChange(selectedOption);
  };

    return (
        <Select
            className="basic-single rounded-md border-amaranth border text-licorice w-full"
            classNamePrefix="select"
            value={stateStatus.find(s => s.value === value)}
            options={stateStatus}
            onChange={handleChange}
        />
    );
};

SingleOption.propTypes = {
    isState: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export { AnimatedMulti, SingleOption };
export default { Tags, State, Status }; 
