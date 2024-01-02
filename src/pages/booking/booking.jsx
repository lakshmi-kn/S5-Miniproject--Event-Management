import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Tab, TabPanel, TabList, Tabs } from 'react-tabs'
import Calendar from 'react-calendar';


import logo from "../../assets/logo.png"
import 'react-tabs/style/react-tabs.css';
import 'react-calendar/dist/Calendar.css';
import "./booking.css"

export const NewBooking = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <Link to='/services' >Services</Link>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
                    </div>
                </div>
            </div>

            <div className="booking">
                <Tabs>
                    <TabList>
                        <Tab>Date & Time</Tab>
                        <Tab>Venue</Tab>
                        <Tab>Transport and Accomodation</Tab>
                        <Tab>Catering</Tab>
                        <Tab>Lights, Visuals and Sounds</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="date-time">
                            <Calendar onChange={setDate} value={date} />
                        </div>
                    </TabPanel>
                        <div className='venue'>


                        </div>

                    <TabPanel>
                        <div className='transp-accom'>

                        </div>
                        <p>
                            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                                Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                            released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                            as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                            appears in many games throughout the Mario franchise, often as a sidekick to his brother.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>

                    <TabPanel>
                        <div className='caterers'>

                        </div>
                        <p>
                            <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                            is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                            Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                            attack by Bowser. She often plays the damsel in distress role within the series and
                            is the lead female. She is often portrayed as Mario's love interest and has appeared
                            in Super Princess Peach, where she is the main playable character.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                        <div className='lvs'>

                        </div>

                    <TabPanel>
                        <p>
                            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                            romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                            video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                            Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                            in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                            and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                            Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                            game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                            characterized by their variety of colors.
                        </p>
                        <p>
                            Source:{' '}
                            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
                                Wikipedia
                            </a>
                        </p>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}