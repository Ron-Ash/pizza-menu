function Avatar({ image }) {
  return <img src={image} alt="*Image Missing*" className="avatar" />;
}

function Intro({ name = "Hello World", description = "Nothing much to tell" }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

function Skill({ colour, text, emojiCode = "" }) {
  return (
    <div style={{ backgroundColor: colour }} className="skill">
      <b>
        {text} {String.fromCodePoint(emojiCode)}
      </b>
    </div>
  );
}

function SkillList({ Skills = [] }) {
  return (
    <div className="skill-list">
      {Skills.map((skill) => (
        <Skill
          colour={skill.colour}
          text={skill.text}
          emojiCode={skill.emoji}
        />
      ))}
    </div>
  );
}

function DevCard({ name, description, image, skillList }) {
  const dataForDevCard = {
    name: "Ron Ashri",
    description:
      "I'm a final year Computer Science student at UQ. Fascinated by all things Machine Learning, Data Science, Cryptography, and Math. Experimenting with applying the concepts I'm learning in and out of the university. Looking to apply and expand my knowledge in the field of machine learning and data science.",
    image: "profilePhoto.jpg",
    skillList: [
      { colour: "lightgreen", text: "Python & C", emoji: "0x1F44D" },
      { colour: "lightblue", text: "React & R & Java", emoji: "0x1F4AA" },
      { colour: "yellow", text: "HTML+CSS", emoji: "0x1F4AA" },
      { colour: "orange", text: "Machine Learning", emoji: "0x1F5A5" },
      { colour: "teal", text: "Data Science", emoji: "0x1F4C8" },
      { colour: "Red", text: "Git+GitHub", emoji: "0x1F603" },
      { colour: "olive", text: "Jira", emoji: "0x1F603" },
    ],
  };

  return (
    <div className="card">
      <Avatar image={dataForDevCard.image} />
      <div className="data">
        <Intro
          name={dataForDevCard.name}
          description={dataForDevCard.description}
        />
        <SkillList Skills={dataForDevCard.skillList} />
      </div>
    </div>
  );
}

export default DevCard;
