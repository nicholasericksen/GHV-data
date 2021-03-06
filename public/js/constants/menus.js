export const MENUS = {
    MAIN_MENU_LINKS: [{
            label: 'Climate Science',
            action: 'MENU_1',
        },
        {
            label: 'Climate Change Impact',
            action: 'MENU_2',
        },
        {
            label: 'Adaptation and Resiliency',
            action: 'MENU_3',
        }
    ],
    MENU_1: [
        {
            label: 'Why Climate Data Matters',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/-G8jy5ldiTU'
            }
        },
        {
            label: 'Climate vs. Weather',
            action: 'CLIMATE_WEATHER_LINKS',
        },
        {
            label: 'Historical Climate Change: Clues in Trees and Ice',
            action: 'HISTORICAL_CLIMATE_LINKS',
        },
        {
            label: 'Real Time Climate Monitoring',
            action: 'REAL_TIME_CLIMATE_TRACKING_LINKS',
        },
        {
            label: 'Natural Forces: Volcanos, Sunspots, and Meteors, Oh My!',
            action: 'NATURAL_FORCES_LINKS',
        },
        // TODO: remove these
        // {
        //     label: 'Sea Level Rise',
        //     action: 'SEA_LEVEL_RISE_LINKS',
        // },
        {
            label: 'The Greenhouse Effect and Anthropogenic Warming',
            action: 'GLOBAL_TEMP_GG_LINKS',
        }
    ],
    MENU_2: [
        {
            label: 'Polar and Glacial Ice',
            action: 'POLAR_ICE_LINKS',
        },
        {
            label: 'Water Cycle and Extreme Weather',
            action: 'WATER_CYCLE_EXTREME_WEATHER',
        },
        {
            label: 'Oceans and Coasts',
            action: 'SEA_LEVEL_RISE_LINKS',
        },
        {
            label: 'Agriculture',
            action: 'CC_AGRICULTURE_LINKS',
        },
        {
            label: 'Forest Cover',
            action: 'CC_FOREST_COVER_LINKS',
        },
        {
            label: 'Wildlife',
            action: 'CC_SPECIES_RANGES_LINKS',
        },
        {
            label: 'Human Health And Disease',
            action: 'CLIMATE_CHANGE_DISEASE_LINKS',
        }
        //{
        //    label: 'Climate Change and Agriculture',
        //    action: 'CC_AGRICULTURE_LINKS',
        //},
        //{
        //    label: 'Climate Change and Forest Cover',
        //    action: 'CC_FOREST_COVER_LINKS',
        //},
        // {
        //     label: 'Climate Change and Species Ranges',
        //     action: 'CC_SPECIES_RANGES_LINKS',
        // },
        //{
        //    label: 'Climate Change and Disease',
        //    action: 'CLIMATE_CHANGE_DISEASE_LINKS',
        //}
    ],
    MENU_3: [
        {
            label: 'The Global Effort',
            action: 'GLOBAL_EFFECT'
        },
        {
            label: 'Coastal Resilience',
            action: 'COASTAL_RESILIENCE'
        },
        {
            label: 'Think Globally, Act Locally',
            action: 'THINK_GLOBALLY'
        }
/* TODO: find out where this goes
        {
            label: 'Water and Energy',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: [
                        'D---waterconsumption-(slideshow).png'
                    ]
                }
            }
        }
*/
    ],
GLOBAL_EFFECT: [
    {
        label: 'Benefits of Global Action',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/_Iz0NKA1yuo'
        }
    },
    {
        label: 'Paris Agreement Interactive',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://cait.wri.org/indc/#/ratification?lang=en'
        }
    },
    {
        label: 'Climate Smart Agriculture',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/lUdNMsVDIZ0'
        }
    },
    {
        label: 'Breeding Resilience into our Forests Case Study',
        action: 'OPEN_PAGE',
        payload: {
            video: 'public/imgs/3_1_4_video.mp4'
        }
    },
    {
        label: 'Meeting World Energy Lab',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'http://www.learner.org/courses/envsci/interactives/energy/energy.html'
        }
    },
    {
        label: 'Our Future Starts Now: UN Markers on Sustainable Development',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/LEMXBNJq8as'
        }
    }
],
COASTAL_RESILIENCE: [
    {
        label: 'Estuary Model & Coastal Resilience',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/jCKYg1NtBnI'
        }
    },
    {
        label: 'Coastal Resilience',
        action: 'OPEN_PAGE',
        payload: {
            video: 'public/imgs/3_2_2_video.mp4'
        }
    },
    {
        label: 'NOAA Digital Coast Mapping Tool',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://coast.noaa.gov/slr/#/layer/slr'
        }
    },
],
THINK_GLOBALLY: [
    {
        label: 'Carbon Mitigation',
        action: 'CARBON_MITIGATION'
    },
    {
        label: 'Emergency Preparedness',
        action: 'EMERGENCY_PREPAREDNESS'
    },
    {
        label: 'Designing Cities for Resilience',
        action: 'DESIGNING_CITIES'
    },
    {
        label: 'Tracking National Progress',
        action: 'TRACKING_PROGRESS'
    },
    {
        label: 'NOAA Resilience Toolkit: Climate Explorer',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://crt-climate-explorer.nemac.org/'
        }
    }
],

CARBON_MITIGATION: [
    {
        label: 'Your Carbon Footprint Calculator',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://coolclimate.berkeley.edu/calculator'
        }
    },
    {
        label: 'Reforestation for Carbon Sequestration',
        action: 'OPEN_PAGE',
        payload: {
            video: 'public/videos/3_3_1_2_video.mp4'
        }
    }
/* TODO: may come later
    {
        label: 'Soil Restoration for Carbon Sequestration',
        action: '',
        payload: {

        }
    }
*/
],
EMERGENCY_PREPAREDNESS: [
    {
        label: 'Weather Ready Nation Videos',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://coolclimate.berkeley.edu/calculator'
        }
    },
    {
        label: 'Simulated Hurricane Video',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/WXB1DQzvfxU'
        }
    },
    {
        label: 'Make an Emergency Plan & Kit (FEMA)',
        action: 'OPEN_PAGE',
        payload: {
            youtube: 'https://www.youtube.com/embed/LviZ4pZrqu8'
        }
    }
],
DESIGNING_CITIES: [
/*    {
        label: 'Sustainable Cities: Nature Based Solutions',
        action: 'OPEN_PAGE',
        payload: {
            video: 'public/videos/3_3_3_3_video.mp4'
        }
    }, */
    {
        label: 'Be Water Wise',
        action: 'OPEN_PAGE',
        payload: {
            slider: {
                baseUrl: 'public/imgs/3_3_3_4/',
                imgs: [
                    '3_3_3_4_pic1.png',
                    '3_3_3_4_pic2.jpg'
                ]
            }
        }
    }
],
TRACKING_PROGRESS : [
/*    {
        label: 'Climate Progress by State Google Map',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://nca2014.globalchange.gov/highlights/report-findings/ecosystems-and-biodiversity#graphic-21081'
        }
    }, */
    {
        label: 'National Renewable Energy Sources',
        action: 'OPEN_PAGE',
        payload: {
            iframe: 'https://www.teachengineering.org/livinglabs/renewableenergy912'
        }
    }
],
//TODO: where does CC_EXTREME_WEATHER GO??
    WATER_CYCLE_EXTREME_WEATHER: [
        {
                label: 'Deluge',
                action: 'OPEN_PAGE',
                payload: {
                    video: 'public/videos/Deluge.mp4'
                }
            },
            {
                label: 'Drought',
                action: 'OPEN_PAGE',
                payload: {
                    video: 'public/videos/Drought.mp4'
                }
            },
            {
                label: 'Freshwater Availability and Consumption',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/water/',
                        imgs: ['B---Freshwater-Availability-in-US.png', '2_2_2_pic2.png'],
                        captions: ['Climate change is projected to reduce water supplies in some parts of the country. This is true in areas where precipitation is projected to decline, and even in some areas where precipitation is expected to increase. Compared to 10% of counties today, by 2050, 32% of counties will be at high or extreme risk of water shortages. Numbers of counties are in parentheses in key. Projections assume continued increases in greenhouse gas emissions through 2050 and a slow decline thereafter (Source: National Climate Assessment 2014).', 'a) Groundwater aquifers are found throughout the U.S., but they vary widely in terms of ability to store and recharge water. The colors on this map illustrate aquifer location and geology (Figure source: USGS). (b) Ratio of groundwater withdrawals to total water withdrawals from all surface and groundwater sources by county. The map illustrates that aquifers are the main (and often exclusive) water supply source for many U.S. , especially in the Great Plains, Mississippi Valley, east central U.S., Great Lakes region, Florida, and other coastal areas. Groundwater aquifers in these regions are prone to impacts due to combined climate and water-use change. (Data from USGS 2005).']
                    }
                }

            },
            //TODO: the images suggested for this are not available at the website.
            {
                label: 'Extreme Precipitation',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/uploads/',
                        imgs: ['Water_spotlight_on_water_management_V3.png'],
                        captions: ['']
                    }
                }
            },
            {
                label: 'NOAA State of the Climate: Extreme Weather Events 2017',
                action: 'OPEN_PAGE',
                payload: {
                    slider:  {
                            baseUrl: 'public/imgs/uploads/',
                            imgs: ['bigextremes-2017-bams.png']
                    }
                }
            },
            {
                label: 'The Cost of Extreme Weather',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/2_2_5_Extreme_Weather/',
                        imgs: ['2_2_5_pic3.png','2_2_5_pic4.jpg','2_2_5_pic5.png','2_2_5_pic6.jpg','2_2_5_pic7.jpg','2_2_5_pic8.jpg','2_2_5_pic9.jpg','2_2_5_pic10.png','2_2_5_pic12.jpg'],
                        captions: ['As extreme precipitation events become more common, so does extreme flooding. Our stormwater infrastructure was not designed for our rapidly changing climate. This slideshow shows the many effects that extreme rain and wind can cause.', 'The map above shows the number of times between 1980 and August 2011 that a U.S. state has been involved in a weather or climate disaster whose region-wide damage totals were at least one billion dollars at the time they occurred. The maps are based on records of economic losses kept by NOAA\'s National Climatic Data Center.', 'It\'s official: 2017 was the costliest year on record for the United States when it comes to natural disasters According to NOAA, the disasters caused $306 billion in total damage in 2017, with 16 events that caused more than $1 billion in damage each. The bulk of the damage, at $265 billion, came from hurricanes Harvey, Irma, and Maria, as well as wildfires on the west coast.', 'Once considered 500-year events, storms like Hurricane Katrina (2005) now occur decades apart or less. Hurricane Katrina destroyed much of the Gulf Coast, especially the city of New Orleans. Severe flooding and inadequate response left many without drinking water, food, or proper first aid for days, if not weeks. Over 1,200 deaths are attributed to Katrina and $161 billion in losses.', 'Flooding in Louisiana has become more common in recent years, even in the absence of a hurricane. In August 2016, prolonged rainfall resulted in catastrophic flooding in the state. Thousands of houses and businesses were submerged.', 'Hurricanes and heavy rain events have different impact depending on where they hit and when. Hurricane Irene (2011) brought 16 inches of rain to upstate New York after an already unseasonably wet August. Saturated soils gave out to erosion and roads and bridges were washed out. It is now considered the most costly Category 1 storm in history.', 'Some storms bring surges along the coast from high winds, instead of heavy rain. This was the case for Superstorm Sandy (2012) Winds swept the peak tide into highly developed areas with great population densities. As a result of the salt-water flooding, economic losses topped $65 billion.', 'As the number of billion dollar weather events continues to rise, what do you think that will mean for the cost of goods and services? For taxes and insurance rates? For equitable access to basic needs?', 'Knowing how vulnerable a location is to costly weather disasters is important to the people who live there, and to emergency planners and insurers. Ultimately, records like this should help scientists figure out if, in addition to the known influence of population growth and development, long-term climate change is contributing to the cost of weather-related disasters.']
                    }
                }
            }
//            {
//                label: 'Water Contamination',
//                action: 'OPEN_PAGE',
//                payload: {
//                    slider: {
//                        baseUrl: 'public/imgs/water/',
//                        imgs: [
//                            'C---Climate-Change-_-Water-Contamination.jpg'
//                        ]
//                    }
//                }
//            }
    ],
    REAL_TIME_CLIMATE_TRACKING_LINKS: [
        {
            label: 'NASA Climate Time Machine: Vital Signs of the Planet',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/interactives/climate-time-machine'
            }
        },
        {
            label: 'Local Weather and River Conditions',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://hudson.dl.stevens-tech.edu/hrecos/d/index.shtml'
            }
        }
    ],
    POLAR_ICE_LINKS: [{
            label: 'Images of Change NASA Glacier Melt',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/images-of-change?id=376#376-muir-glacier-melt-alaska'
            }
        },
        {
            label: 'Antarctic & Greenland Land Ice',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    imgs: ['Antarctica.png', 'Greenland.png', 'west-antarctica.jpg'],
                    baseUrl: 'public/imgs/polar-ice/',
                    captions: ['ANTARCTICA MASS VARIATION SINCE 2002: Rate of change = -127.0 Gigatonnes/year. Data from NASA\'s GRACE satellites show Antarctica shed approximately 125 gigatons of ice per year, since 2002, causing global sea level to rise by 0.35 millimeters per year.', 'GREENLAND MASS VARIATION SINCE 2002: Rate of change = -286.0 Gigatonnes/year. Data from NASA\'s GRACE satellites show that the land ice sheets in both Antarctica and Greenland have been losing mass since 2002. Both ice sheets have seen an acceleration of ice mass loss since 2009. (Source: GRACE satellite data)','According to a recent study, Antarctica\'s land ice losses in the last decade were primarily concentrated in West Antarctica\'s Pine Island Bay sector and the northern tip of the Antarctic Peninsula. This is most likely due to ongoing and past acceleration of glaciers into the sea, "a result of warmer ocean waters, which bathe the buttressing floating sections of glaciers, causing them to thin or collapse." (Eric Rignot of NASA\'s Jet Propulsion Laboratory)']
                }
            }
        },
        {
            label: 'National Snow & Ice Data Center',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nsidc.org/data/tools/arctic-sea-ice-chart/'
            }
        },
        {
            label: 'Arctic Sea Ice',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    imgs: ['2_1_4_pic2.jpg', '2_1_4_pic4.png'],
                    baseUrl: 'public/imgs/2_1_4_Sea_Ice/',
                    captions: ['Arctic sea ice reaches its minimum each September. September Arctic sea ice is now declining at a rate of 13.2% per decade, relative to the 1981 to 2010 average. This graph shows the average monthly Arctic sea ice extent each September since 1979, derived from satellite observations.', 'Could the Arctic be essentially ice-free by mid-century? Model simulations of Arctic sea ice extent for September (1900-2100) based on observed concentrations of heat-trapping gases and particles (through 2005) and four scenarios. These newer model (CMIP5) simulations project more rapid sea ice loss compared to the previous generation of models (CMIP3) under similar forcing scenarios. (Figure source: adapted from Stroeve et al. 2012).']
                }
            }
        },
    ],
    HISTORICAL_CLIMATE_LINKS: [
        {
            label: "Dendrichronology: What tree cores tell us about local climate history.",
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/-Vfg4GieRTc'
            }
        },
        {
            label: 'Climate History in Ice Cores (NOVA Video Segment: Extreme Ice)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/NOVA-National-Ice-Core-Lab-Video.mp4'
            }
        }

    ],
    NATURAL_FORCES_LINKS: [
            {
                label: 'Natural Cycles: Evidence of Change',
                action: 'OPEN_PAGE',
                payload: {
                    youtube: 'https://www.youtube.com/embed/2_10jtPCjQw'
                }
            },
            {
                label: 'Natural Climate Forces',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/natural-climate-forces/',
                        captions: ['Not only human behavior cause climatic changes. Uncontrollable factors like variation of solar radiation cause\ changes in climate by affecting the global warming via cycle sunspot activity.  Another factor is the orbital variation.\ Seasonal distribution of earth is mainly due to the rotation of the earth in current orbit, a slight change of the earth\’s\ orbit can induce a large change in sunlight that reach earth surface and cause seasonal changes on earth. Variation of\ earth\’s\ orbit can be due to\
                        1.Change in tilt angle of earth’s axis of rotation\n\
                        2.Precession of earth axis\n\
                        3.Combination of above phenomena.\n',
                        'Global-average radiative forces (RF) estimates and ranges in 2005 for anthropogenic carbon dioxide (CO2), methane (CH4),\ nitrous oxide (N2O) and other important agents and mechanisms, together with the typical geographical extent (spatial scale) of the forcing and the assessed level of scientific understanding (LOSU). The net anthropogenic radiative forcing and its range are also shown. These require summing asymmetric uncertainty estimates from the component terms, and cannot be obtained by simple addition. Additional forcing factors not included here are considered to have a very low LOSU. Volcanic aerosols contribute an additional natural forcing but are not included in this figure due to their episodic nature. Range for linear contrails does not include other possible effects of aviation on cloudiness.'
                        ],
                        imgs: ['CS-1-Natural-climate-forces.jpg','2-ipcc-source.png']
                    }
                }
            },
            {
                label: 'NASA Video Comparing Natural & Human Factors',
                action: 'OPEN_PAGE',
                payload: {
                    video: 'public/videos/NASA-Comparing-Natural-and-Human.mp4'
                }
            }
    ],
    SEA_LEVEL_RISE_LINKS: [
        {
            label: 'Ocean Acidification',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/Wo-bHt1bOsw'
            }
        },
        {
            label: 'NOVA Impact of Ocean Acidification',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/2.3.2-NOVA-Researching-Impacts-of-Ocean-Acidification.mp4'
            }
        },
        {
            label: 'NOAA Digital Coast Mapping Tool',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://coast.noaa.gov/slr/#/layer/slr'
            }
        },
        {
            label: 'Yonkers and the Hudson Valley Coastline',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://scenichudson.maps.arcgis.com/apps/MapSeries/index.html?appid=9190b7560a574ad69cd91b43e383b203'
            }
        },
        {
                label: 'If Antarctica Melted',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/antarctica-melted/',
                        captions: [
                            'North America\'s new coastline after land ice melt causes sea level to rise 216 feet would lose the eastern\
                             seaboard, nearly all of Florida, and the Gulf Coast. Scientists say with limited global warming, it would take 5,000 \
                             years for this ice to melt. With a runaway greenhouse effect, however, that timeline could shrink with the ice cover.',
                             'The major cities of Australia and South Pacific, where 4 out of 5 people live, would \
                              be under water. Some of Australia\'s desert would be replaced with an inland sea.',
                              'In Europe, London, Venice, Stockholm, and St. Petersburg, would be swallowed up by the sea, including most of Denmark and the Netherlands.',
                              'South America\'s Amazon and Paraguay Rivers would become ocean inlets. Only the more mountainous regions of Central America would remain.',
                              'Antarctica looks very different without ice. East Antarctica has survived earlier warming periods, and has been getting more snow in recent decades.\
                               West Antarctica, on the other hand is vulnerable and has experienced accelerated melting. \
                              In 2017, a sheet the size of Delaware broke off into the ocean. Luckily, most of this ice is already on submerged bedrock and would not cause as much sea level rise.',
                              'Africa\'s coastline would change the least, though Mauritania, Senegal, Sierra Leone, and Egypt would be radically affected. \
                              Also, without the albedo effect (ice\'s white surface reflecting the sun\'s light and heat), the African continent would have oppressively hot temperatures.',
                              'The greatest population centers along coastal India, China, and Bangladesh, where over a billion people live, would be underwater. \
                               Tokyo, Japan would be a distant memory. Even a 6 foot sea-level rise would impact the planet\'s coastal communities greatly. Can we reverse the trend in time?'
                        ],
                        imgs: [
                                'canada.jpg',
                                'australia.jpg',
                                'europe.jpg',
                                'sa.jpg',
                                'sp.jpg',
                                'africa.jpg',
                                'asia.jpg'
                         ]
                    }
                }
            }
    ],
    CLIMATE_WEATHER_LINKS: [{
            label: 'What Is Climate? (Video by Utah Education Network Climate Science Series)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/ClimateScience-EP2-final360.mp4'
            }
        },
        {
            label: 'Trend and Variation (Climate versus Weather)',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/e0vj-0imOLw'
            }
        }
    ],
    GLOBAL_TEMP_GG_LINKS: [{
            label: 'The Greenhouse Effect',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/greenhouse-effect/',
                    imgs: ['Greenhouse-Gasses.jpg', 'The-Greenhouse-Effect.jpg'],
                    captions: ['Earth\'s atmosphere consists of a mixture of gases. The composition is 78% Nitrogen, 21% Oxygen, .9% Argon, and 2% other variable gases. Scientists study these variable gases especially because their heat trapping potential. They include Carbon Dioxide, Methane, Nitrous Oxide, and Sulfur Hexaflouride, as well as Ozone (O3), and Water Vapor.', 'Greenhouse Gases allow sunlight through to be absorbed or reflected by the sun, but trap some of the re-radiated long waves from leaving our atmosphere, thereby warming our planet. Without greenhouse gases, Earth would be cold and uninhabitable, like Mars. However, modern agriculture, industry, and energy production has greatly increased greenhouse gas concentration. 99% of scientists agree that this human activity has caused accelerated global warming (climate change).']
                }
            }
        },
        {
            label: 'Global Temperature Time-lapse 1884-2012 (NASA Scientific Visualization Studio)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/Global-Temp-Interactive-Map.mp4'
            }
        },
        {
            label: 'CO2 Temperature Correlation (past 800,000 years)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/c02-temp-correlation/',
                    imgs: ['CO2-and-Temperature-Corr.jpg'],
                    captions: ['Scientists measure trapped gases and oxygen isotopes in annual layers of ice core samples to get data on CO2 concentrations in the atmosphere and global temperatures over the past 800,000 years. Graphing the data presents a strong direct correlation between the two, and strongly suggests that their relationship might be what is driving the current warming trend on Earth.']
                }
            }
        },
        {
            label: 'Natural and Human Factors',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                        baseUrl: 'public/imgs/natural-human-factors/',
                        captions: ['Observed global average changes (black line), model simulations using only changes in natural factors (solar and volcanic) in green, and model simulations with the addition of human-induced emissions (blue). Climate changes since 1950 cannot be explained by natural factors or variability, and can only be explained by human factors. '],
                        imgs: ['models-observed-human-natural-source-EPA.png']
                }
            }
        },
        {
            label: 'Post Industrial C02 and Temperature (1850-2015)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/modern-era-c02-temp/',
                    imgs: ['Modern-Era-global-temp-and-co2-NOAA-source.gif', 'Figure1.jpg'],
                    captions: ['Blue bars represent cooler than 1880-2010 average temperature (read bottom of bar) and red bars represent warmer than average (read top of bars). Black line represents CO2 concentrations in parts per million. Climate scientists have warned for decades that we should not surpass the 400 ppm threshold to keep the warming trend in check. However, in September 2016, we permanently crossed the 400ppm threshold. 2016 was the hottest year ever recorded in human history.']
                }
            }
        }
    ],
    CC_EXTREME_WEATHER: [
        {
            label: 'Billion Dollar Weather Events',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/billion-dollar-weather/',
                    imgs: ['A---billion_dollar_events_bystate_lrg.png',
                        'B---Billion-Dollar-Events-since-2008.jpg',
                        'C---natural-catastrophies.jpg',
                        'D--weather-catastrophies.png'
                    ],
                    captions: [
                        'This NOAA map shows the number of billion-dollar disasters affecting each U.S. state between 1980 and 2016. Deeper color concentration illustrates greater number of disasters. Total number of disasters equals 203. Image adapted by Climate.gov, based on NCEI originals by Adam Smith.',
                        'Map showing the number of times each state has been part of a billion-dollar weather or climate disaster of any type from 1980-2016. The darker the red, the greater the number of events the state has experienced. U.S. South/Central and Southeast regions experienced a higher frequency of billion-dollar disaster events than any other region. Map adapted by Climate.gov from originals provided by NOAA NCEI.',
                        'Around the world, natural catastrophes are on the rise. Many can be directly classified as climatological in nature, such as drought, heatwaves, and forest fires. The increase in hydrological events, such as hurricanes and flood-rains, may be influenced by climate change, but it is harder to prove direct causation.',
                        'Costly weather-related disasters have had a crippling effect on major economies around the world. Economic losses (property damage, loss of goods and services, infrastructure, communication lines) have increased even when the number of events have decreased because the severity of each extreme weather event has gone up.'
                    ]
                }
            }
        },
        {
            label: 'Heavy Precipitation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/heavy-precipitation/',
                    imgs: ['A---CS_extreme_precip_index_13263_V9.png',
                        'B---CS-Water_flood_trends_v5.png',
                        'C---heavy-precipitation.png',
                        'D---CS_winter_storms_v4.png'
                    ],
                    captions: [
                        'One measure of a heavy precipitation event is a 2-day precipitation total that is exceeded on average only once in a five-year period, also known as a once-in-five-year event. As this extreme precipitation index for 1901-2012 shows, the occurrence of such events has become much more common in recent decades. Changes are compared to the period 1901-1960, and do not include Alaska or Hawai‘i. The 2000s decade (far right bar) includes 2001-2012. (Figure source: adapted from Kunkel et al. 20131).',
                        'Trend magnitude (triangle size) and direction (green = increasing trend, brown = decreasing trend) of annual flood magnitude from the 1920s through 2008. Flooding in local areas can be affected by multiple factors, including land-use change, dams, and diversions of water for use. Most significant are increasing trends for floods in Midwest and Northeast, and a decreasing trend in the Southwest.(Figure source: Peterson et al. 20131).',
                        'The number of "extreme precipitation" events around the U.S.A. are on the rise, especially in the Northeast, Midwest, Southeast, and Great Plains. (Figure source: adapted from Kunkel et al. 20131).',
                        'Though snowfall in the Northern Hemisphere has decreased overall due to increasing global temperatures, the intensity of winter events has increased in many areas, because a warmer atmosphere can hold more moisture. The bar for each decade represents the difference from the long-term average. Storm frequencies have increased in middle and high latitudes, and storm intensities have increased in middle latitudes. (Figure source: updated from CCSP 2008).'
                    ]
                }
            }
        },
        {
            label: 'Hurricane Sandy The jury is out on the climate change connection. (NOVA Video)',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/6V-Hurricane-Sandy-and-Climate-Change-Connection.mp4'
            }
        }
    ],
    CC_AGRICULTURE_LINKS: [
        {
            label: 'Climate Change and Agriculture',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.youtube.com/embed/hjT__OpDn6E'
            }
        },
        {
            label: 'USDA Plant Zone Hardiness Map',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/zone-hardness/',
                    imgs: ['zone-hardiness-changes.png'],
                    captions: ['USDA Plant Hardiness Zone Map (Past & Present) - Much of the U. S. has been warmer in recent years, and that affects which trees and crops are right for planting, due to the severity and length of winter months (hardiness). The Arbor Day Foundation has recently completed an extensive updating of U.S. Hardiness Zones based upon data from 5,000 National Climatic Data Center cooperative stations across the continental United States. Notice the shift in zones.']
                }
            }
        },
        {
            label: 'Projected Crop Yields 2050',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/climate-crop/',
                    imgs: ['climate_and_crop_yields_2-World-Resource-Institute.jpg']
                }
            }
        },
        {
            label: 'NOAA Drought Monitor (Animated Maps)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/extreme-draught/',
                    imgs: ['US-Drought-Index-2011-2012.gif',
                        'US-Drought-Index-2014-2015.gif'
                    ],
                    captions:[
                        '2011-2012 brought extreme drought to the Southwest, especially Texas, and Great Plains. Texas suffered $7.62 billion in crop and livestock losses, with nearly 1/3 of cattle dying in the field from dehydration. Wildfires spiked: 23,835 fires burned more than 3.8 million acres and destroyed 2,763 Texas homes over 2011. At its peak in August 2012 the drought covered approximately 81% of the United States. Corn prices shot up 35% due to crop failure.',
                        'The drought in the western coast hit critical mass in 2014, with the Governor Brown declaring California in a state of emergency. California\'s ancient forests, a national treasure, were left weakened and vulnerable. During the 5-year drought period, California greatly depleted groundwater reserves for agriculture and industry, causing the land to sink in places, seawater intrusion in others, and water allocations to be reduced all over.'
                    ]
                }
            }
        }
/* TODO: find where this goes
        {
            label: 'Resilience for Farmers',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/4ieM_zKB6U4'
            }
        }
*/
    ],
    CC_FOREST_COVER_LINKS: [{
            label: 'Increases in Wildfires',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/increase-wildfires/',
                    imgs: [
                        'A---Increase-in-Forest-Fire.jpg',
                        'A1---Forest-Fires-are-Getting-Bigger.jpg',
                        'A2---Acreage-Burned.png'
                    ],
                    captions: ['Seasonal and multi-year droughts coupled with higher temperatures can affect wildfire severity. Despite improved techniques by foresters to reduce the number of forest fires, the acreage burned has still increased markedly in the past two decades.', 'For example, persistent drought conditions in the Southwest, combined with wildfire suppression and land management practices, have contributed to wildfires of unprecedented size since 2000. Five western states (Arizona, Colorado, Utah, California, and New Mexico) have experienced their largest fires on record at least once since 2000. Much of the increase in fires larger than 500 acres occurred in the western United States, and the area burned in the Southwest increased more than 300% relative to the area burned during the 1970s and early 1980s.', 'Summer of 2015 began one of the most devastating recent years for wildfire losses. By year\’s end, wildfires would consume more than 10.1 million acres of land in the U.S., especially in Alaska and all along the west coast, destroying 4,500 homes and taking the lives of 13 wildland firefighters.']
                }
            }
        },
        {
            label: 'Global Deforestation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/global-deforestation_climate-change/',
                    imgs: [
                        'B1--Deforestation-and-Climate-Change.jpg',
                        'B2---deforestation-and-climate-change-mitigation.jpg',
                        'B3---Deforestation-Effects.jpg',
                        'B4---Causes-of-Deforestation.jpg'
                    ],
                    captions: ['Climate change can cause drought conditions which lead to deforestation through wildfire - but deforestation also releases stored carbon, contributing to future warming and climate change. Deforestation through development and agriculture has the same effect.', 'Left undisturbed, natural forests are a carbon sink, meaning that growing trees in the forest trap more carbon through photosynthesis than dying trees release. Forests continuously stock carbon away in ever-increasing biomass and in the soil. Old growth forests actually remove carbon from the atmosphere faster than new growth forests. This means that avoiding deforestation is better for reducing carbon dioxide than reforestation efforts are at removing carbon dioxide.', 'Deforestation also puts undue environmental pressure on a biosphere already stressed by climate change and pollution. Over 80% of land animals and plants call the shrinking forests their home. Evapo-transpiration over our tropical forests is a key component in the water cycle, moving moisture around. Deforestation leaves once moist, rich soils quickly susceptible to drying out and becoming barren.', 'Agriculture is the leading cause for man-made deforestation. Forests are clear cut to make room for cattle and other grazing animals, palm trees, soybeans and other cash crops. At the current rate of deforestation, the rainforests would be completely gone by the turn of the next century. Developed northern-latitude countries have been clearing their forests for centuries. As a result, about one-third of all human-caused greenhouse gas emissions since 1750 have been from land-use change—mostly deforestation in Europe, North America, and temperate Asia']
                }
            }
        },
        {
                label: 'Forest Pest Video',
                action: 'OPEN_PAGE',
                payload: {
                    iframe: 'https://www.youtube.com/embed/nUilMIKTWmY'
                }
        },
        {
                label: 'Projected Shift in Forest Types',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/2.5.4-Projected-Shifts-in-Forest-Types/',
                        imgs: [
                            '2.5.4-1.jpg',
                            '2.5.4-2.jpg'
                        ],
                        captions: ['These maps show current and projected forest types. Major changes are projected for many regions. For example, in the Northeast, under a mid-range warming scenario, the currently dominant maple-beech-birch forest type is projected to be completely displaced by predominantly Oak and Hickory in a warmer future.', 'These maps show current and projected forest types. Major changes are projected for many regions. For example, in the Northeast, under a mid-range warming scenario, the currently dominant maple-beech-birch forest type is projected to be completely displaced by predominantly Oak and Hickory in a warmer future.']
                    }
                }
        },
        {
            label: 'Forests: Lungs of the Earth',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/The-Forests-Lungs-of-the-Earth-(NASA-Imaging-of-CO2-and-Photosynthesis).m4v'
            }
        },
/* TODO: find out where this goes
        {
            label: 'Projected Shifts in Forest Types',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/projected-shift/',
                    imgs: ['Projected-Shift-in-Forest-Type.jpg']
                }
            }
        }
*/
    ],
CC_SPECIES_RANGES_LINKS: [
    {
            label: 'A Warmer World For Arctic Animals',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/a_warmer_world_for_arctic_animals_pod.MP4'
            }
    },
    {
         label: 'Species Range',
         action: 'OPEN_PAGE',
         payload: {
             slider: {
                 baseUrl: 'public/imgs/uploads/',
                 imgs: ['map.png'],
                 captions: ['Map of selected observed and projected biological responses to climate change across the United States. Note: Information about each species\' response can be found in Unit III of our curriculum. (Figure source: Staudinger et al., 20121).']
             },

         }
     },
     {
         label: 'Bees are Feeling the STING of Climate Change',
         action: 'OPEN_PAGE',
         payload: {
             video: 'public/videos/2.6.3-Honeybees-Feeling-the-Sting.m4v'
         }
     }
],
    CLIMATE_CHANGE_DISEASE_LINKS: [{
            label: 'Climate Change & Human Health',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/climate-change-human-health/',
                    imgs: ['A---Climate-Change-&-Human-Health-(CDC-image).jpg'],
                    captions: ['Climate Change & Human Health (CDC image) - The chart depicts the many different ways climate change impacts health. What do they have in common? Their negative health outcomes are preventable.']
                }
            }
        },
/* TODO: find where this goes
        {
            label: 'Rise in Vector Species',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/rise-vector-species/',
                    imgs: ['B1---Projected-Change-in-Tick-Population.png',
                        'B2---CO2-and-Mosquitos-in-Northeast-USA.png'
                    ]
                }
            }
        },
*/
        {
                label: 'Regional Vulnerabilities',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/2_7_2_Climate_and_Health/',
                        imgs: [
                            '2_7_2_pic2.jpg'
                        ]
                    }
                }
        },
        {
                label: 'Extreme Heat Waves',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/extreme-heatwave/',
                        imgs: ['A---Deadliest-Heat-Waves.jpg',
                            'B---Western-Europe-Heat-Wave-2006.jpg',
                            'C---Russia-Heat-Wave-July-2010.png',
                            'C1---Russian-Heat-Wave-July-2010-NOAA-Anomalies.png',
                            'C2---Russian-Heat-Wave-July-2010-_-Wildfire.jpg',
                            'C3---Russia-Heat-Wave-July-2010-Wildfires.png',
                            'C4---Russia-Heat-Wave-July-2010-Wildfires2.jpg',
                            'D---India-Heat-Wave-May-2015.png',
                            'D1---India-Heat-Wave-May-2015-Dried-Pond.jpg',
                            'D2---India-Heat-Wave-May-2015-Melting-Roads-(CNN).jpg',
                            'D3---India-Heat-Wave-May-2015-Men-Sleep-on-Road-Divider-in-Delhi.jpg',
                            'E---Western-US-Heat-Wave-June-2017.jpg'
                        ],
                        captions: [
                            'Global warming has caused more temperature modulation over land, increasing the incidence of extreme heat waves. The five deadliest in recorded human history have all taken place in the last two decades.',
                            'The 2003 European heatwave led to the hottest summer on record in Europe since at least 1540. In late June 2006, another heatwave broke many of the 2003 records for the UK, Belgium, Ireland, the Netherlands, and Germany. These events, once occurring 1-in-30 years, are now expected 1-in-3.5 years.',
                            ' In July 2010, Moscow and western Russia experienced record-breaking temperatures (up to 12 degrees Celsius higher than normal) that led to severely dry land.',
                            'The whole Northern Hemisphere experienced much higher than average temperatures in 2010, but Russia was the hardest hit. Between scorching temperatures, extreme drought causing wildfire, and resulting poor air quality, over 10,000 deaths may be attributed to this heatwave in Russia alone.',
                            'By the end of the heatwave, Russia\'s forests were so desiccated, that wildfire ran rampant through September in the forests to the west, causing $15 billion in damages, and adding to the death-toll started by the heatwaves.',
                            'All told, over 740,000 acres of forests burned.',
                            'All told, over 740,000 acres of forests burned.',
                            'In May 2015, India saw temperatures exceeding 115 degrees Fahrenheit. This map shows hottest daytime high temperature during the week May 24-30, 2015. NOAA Climate.gov map by Fiona Martin, based on interpolated weather station data provided by the India Meterological Department.',
                            'Sheep being herded across a dried-up pond on the outskirts of Delhi. Farmers and laborers were hottest hit. Crops were ravaged by the heat and thousands of livestock died out in pasture.',
                            'Temperatures in the cities were high enough to melt the blacktop.',
                            'Heatwaves disproportionately affect the marginalized in society. Poorer people haven\'t the amenities, such as sufficient shelter, ice water, and air-conditioning, to escape extreme temperatures. Sick and elderly are more susceptible to heat stroke and dehydration. Some reports say that over 2300 people died in India from the heatwave.',
                            'The U.S.A. has also experienced more frequent and extreme heatwaves in the past few decades. Summer 2017 brought temperatures to southern California and Arizona that exceeded 125 degrees Fahrenheit, bringing brownouts from excessive A/C demand on the grid, buckled roads, temporary business closures, and over 12 deaths.',
                        ]
                    }
                }
            },
            {
                label: 'Climate Change and Air Quality Map Tool',
                action: 'OPEN_PAGE',
                payload: {
                    iframe: 'https://www.nrdc.org/climate-change-and-health-air-quality#/map'
                }
            },
            {
                label: 'Water Contamination',
                action: 'OPEN_PAGE',
                payload: {
                    slider: {
                        baseUrl: 'public/imgs/2.7.5-Water-Contamination/',
                        imgs: [
                            '2.7.5.2-pic1.jpg','2.7.5.2-pic2.jpg','2.7.5.2-pic3.png'
                        ]
                    }
                }
            }
        // {
        //     label: 'Forest Pest Video',
        //     action: 'OPEN_PAGE',
        //     payload: {
        //         iframe: 'http://www.pressherald.com/2016/12/07/spread-by-trade-and-climate-bugs-butcher-americas-forests/video/'
        //     }
        // },
        // {
        //     label: 'Invasive Species',
        //     action: 'OPEN_PAGE',
        // }
    ]
};
