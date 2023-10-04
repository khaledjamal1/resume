/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */

'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

function ResumeForm() {
  const education = (
    <div>
      <div>
        <Label>Name</Label>
        <Input />
      </div>
      <div className="flex">
        <div>
          <Label>Start Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>End Date</Label>
          <Input type="date" />
        </div>
      </div>
    </div>
  );

  const experience = (
    <div>
      <div>
        <Label>Job title</Label>
        <Input />
      </div>
      <div>
        <Label>Company</Label>
        <Input />
      </div>
      <div className="flex">
        <div>
          <Label>Start Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>End Date</Label>
          <Input type="date" />
        </div>
      </div>
      <div>
        <Label>Details</Label>
        <Textarea />
      </div>
    </div>
  );
  const project = (
    <div>
      <div>
        <Label>Job title</Label>
        <Input />
      </div>
      <div>
        <Label>Company</Label>
        <Input />
      </div>
      <div className="flex">
        <div>
          <Label>Start Date</Label>
          <Input type="date" />
        </div>
        <div>
          <Label>End Date</Label>
          <Input type="date" />
        </div>
      </div>
      <div>
        <Label>Details</Label>
        <Textarea />
      </div>
    </div>
  );
  const [skills, setSkills] = useState<string[]>([]);
  const [skill, setSkill] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [language, setLanguage] = useState('');
  const [educationState, setEducationState] = useState([education]);
  const [experienceState, setExperienceState] = useState([experience]);
  const [projectState, setProjectState] = useState([project]);
  const [resumeState, setResumeState] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    website: '',
    education: [],
    experience: [],
    skills: [],
    languages: [],
    projects: [],
  });
  const remove = (index: number) => {
    const newEducationState = [...educationState];
    newEducationState.splice(index, 1);
    setEducationState(newEducationState);
  };
  return (
    <div className="flex flex-col">
      <div>
        <Label>Full Name</Label>
        <Input
          onChange={(e) =>
            setResumeState({
              ...resumeState,
              fullName: e.target.value,
            })
          }
          value={resumeState.fullName}
        />
      </div>
      <div className="flex">
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={resumeState.email}
            onChange={(e) =>
              setResumeState({ ...resumeState, email: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Phone Number</Label>
          <Input
            type="number"
            value={resumeState.phoneNumber}
            onChange={(e) =>
              setResumeState({ ...resumeState, phoneNumber: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Website</Label>
          <Input
            value={resumeState.website}
            onChange={(e) =>
              setResumeState({ ...resumeState, website: e.target.value })
            }
          />
        </div>
      </div>
      <section id="education">
        <h1>Education</h1>
        {educationState.map((edu, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex flex-col">
            <div>{edu}</div>
            <Button
              onClick={() => remove(index)}
              className={`max-w-fit ${index === 0 ? 'hidden' : ''}`}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          onClick={() => setEducationState([...educationState, education])}
        >
          Add more
        </Button>
      </section>
      <section id="experience">
        <h1>Education</h1>
        {experienceState.map((edu, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex flex-col">
            <div>{edu}</div>
            <Button
              onClick={() => remove(index)}
              className={`max-w-fit ${index === 0 ? 'hidden' : ''}`}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          onClick={() => setExperienceState([...experienceState, experience])}
        >
          Add more
        </Button>
      </section>
      <section id="skills" className="flex flex-col">
        <Label>Skill</Label>
        <div className="flex">
          <Input value={skill} onChange={(e) => setSkill(e.target.value)} />
          <Button
            onClick={() => {
              setSkills([...skills, skill]);
              setSkill('');
            }}
          >
            Add
          </Button>
        </div>
      </section>
      <section id="languages" className="flex flex-col">
        <Label>language</Label>
        <div className="flex">
          <Input
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          <Button
            onClick={() => {
              setLanguages([...languages, language]);
              setLanguage('');
            }}
          >
            Add
          </Button>
        </div>
      </section>
      <section id="projects">
        <h1>Education</h1>
        {projectState.map((edu, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex flex-col">
            <div>{edu}</div>
            <Button
              onClick={() => remove(index)}
              className={`max-w-fit ${index === 0 ? 'hidden' : ''}`}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button onClick={() => setProjectState([...projectState, experience])}>
          Add more
        </Button>
      </section>
    </div>
  );
}

export default ResumeForm;
