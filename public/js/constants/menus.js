export const MENUS = {
    MAIN_MENU_LINKS: [{
            label: 'Climate Monitoring',
            action: 'CLIMATE_MENU_LINKS',
        },
        {
            label: 'Impact on Biotic Communities',
            action: 'BIOTIC_MENU_LINKS',
        },
        {
            label: 'Impact on Water Cycle & Resources',
            action: 'WATER_MENU_LINKS',
        }
    ],
    CLIMATE_MENU_LINKS: [{
            label: 'Real Time Climate Monitoring',
            action: 'REAL_TIME_CLIMATE_TRACKING_LINKS',
        },
        {
            label: 'Polar and Glacial Ice',
            action: 'POLAR_ICE_LINKS',
        },
        {
            label: 'Sea Level Rise',
            action: 'SEA_LEVEL_RISE_LINKS',
        },
        {
            label: 'Climate vs. Weather',
            action: 'CLIMATE_WEATHER_LINKS',
        },
        {
            label: 'Global Temperatures and Greenhouse Gas Concentration',
            action: 'GLOBAL_TEMP_GG_LINKS',
        },
        {
            label: 'Climate Change and Extreme Weather Events',
            action: 'CC_EXTREME_WEATHER',
        }
    ],
    BIOTIC_MENU_LINKS: [{
            label: 'Climate Change and Agriculture',
            action: 'CC_AGRICULTURE_LINKS',
        },
        {
            label: 'Climate Change and Forest Cover',
            action: 'CC_FOREST_COVER_LINKS',
        },
        // {
        //     label: 'Climate Change and Species Ranges',
        //     action: 'CC_SPECIES_RANGES_LINKS',
        // },
        {
            label: 'Climate Change and Disease',
            action: 'CLIMATE_CHANGE_DISEASE_LINKS',
        }
    ],
    WATER_MENU_LINKS: [{
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
            label: 'Freshwater Availablity and Consumption',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: ['B---Freshwater-Availability-in-US.png']
                }
            }

        },
        {
            label: 'Water Contamination',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/water/',
                    imgs: [
                        'C---Climate-Change-_-Water-Contamination.jpg'
                    ]
                }
            }
        },
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
    ],
    REAL_TIME_CLIMATE_TRACKING_LINKS: [{
            label: 'Why Climate Data Matters (IRI Video)',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/-G8jy5ldiTU'
            }
        },
        {
            label: 'NASA Climate Time Machine: Vital Signs of the Planet',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/interactives/climate-time-machine'
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
    POLAR_ICE_LINKS: [{
            label: 'Images of Change NASA Glacier Melt',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/images-of-change?id=376#376-muir-glacier-melt-alaska'
            }
        },
        {
            label: 'Antartic & Greenland Land Ice',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    imgs: ['Antarctica.png', 'Greenland.png', 'west-antarctica.jpg'],
                    baseUrl: 'public/imgs/polar-ice/'
                }
            }
        },
        {
            label: 'National Snow & Ice Data Center',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nsidc.org/data/tools/arctic-sea-ice-chart/'
            }
        }
    ],
    SEA_LEVEL_RISE_LINKS: [{
            label: 'If Antartica Melted: National Geographic Maps',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/antarctica-melted/',
                    imgs: [
                        {
                            caption: 'North America\'s new coastline after land ice melt causes sea level to rise 216 feet would lose the eastern\
                             seaboard, nearly all of Florida, and the Gulf Coast. Scientists say with limited global warming, it would take 5,000 \
                             years for this ice to melt. With a runaway greenhouse effect, however, that timeline could shrink with the ice cover.',
                            src: 'canada.jpg'
                        },
                        {
                            caption: 'The major cities of Australia and South Pacific, where 4 out of 5 people live, would \
                             be under water. Some of Australia\'s desert would be replaced with an inland sea.',
                            src: 'australia.jpg'
                        },
                        {
                            caption: 'In Europe, London, Venice, Stockholm, and St. Petersburg, would be swallowed up by the sea, including most of Denmark and the Netherlands.',
                            src: 'europe.jpg'
                        },
                        {
                            caption: 'South America\'s Amazon and Paraguay Rivers would become ocean inlets. Only the more mountainous regions of Central America would remain.',
                            src: 'sa.jpg'
                        },
                        {
                            caption: 'Antarctica looks very different without ice. East Antarctica has survived earlier warming periods, and has been getting more snow in recent decades.\
                             West Antarctica, on the other hand is vulnerable and has experienced accelerated melting. \
                            In 2017, a sheet the size of Delaware broke off into the ocean. Luckily, most of this ice is already on submerged bedrock and would not cause as much sea level rise.',
                            src: 'sp.jpg'
                        },
                        {
                            caption: 'Africa\'s coastline would change the least, though Mauritania, Senegal, Sierra Leone, and Egypt would be radically affected. \
                            Also, without the albedo effect (ice\'s white surface reflecting the sun\'s light and heat), the African continent would have oppressively hot temperatures.',
                            src: 'africa.jpg'
                        },
                        {
                            caption: 'The greatest population centers along coastal India, China, and Bangladesh, where over a billion people live, would be underwater. \
                             Tokyo, Japan would be a distant memory. Even a 6 foot sea-level rise would impact the planet\'s coastal communities greatly. Can we reverse the trend in time?',
                            src: 'asia.jpg'
                        }
                     ]
                }
            }
        },
        {
            label: 'NOAA Interactive Map: Sea Level Rise and Mitigation',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://coast.noaa.gov/slr/#/layer/slr'
            }
        },
        {
            label: 'Sea Level Rise Local Scenarios: Scenic Hudson Interactive Map',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://scenichudson.org/slr/mapper#block-menu-block-1'
            }
        }
    ],
    CLIMATE_WEATHER_LINKS: [{
            label: 'What Is Climate?',
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
                    imgs: ['Greenhouse-Gasses.jpg', 'The-Greenhouse-Effect.jpg']
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
            label: 'Historical CO2 and Global Temperature Correlation',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/c02-temp-correlation/',
                    imgs: ['CO2-and-Temperature-Corr.jpg']
                }
            }
        },
        {
            label: 'Modern Era CO2 and Temperature Correlation (1880-2010)',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/modern-era-c02-temp/',
                    imgs: ['Modern-Era-global-temp-and-co2-NOAA-source.gif', 'Figure1.jpg']
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
    CC_EXTREME_WEATHER: [{
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
                    ]
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
                    ]
                }
            }
        },
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
                    ]
                }
            }
        },
        {
            label: 'Hurricane Sandy',
            action: 'OPEN_PAGE',
            payload: {
                video: 'public/videos/6V-Hurricane-Sandy-and-Climate-Change-Connection.mp4'
            }
        }
    ],
    CC_AGRICULTURE_LINKS: [{
            label: 'USDA Plant Hardiness Zone Map',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/zone-hardness/',
                    imgs: ['zone-hardiness-changes.png']
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
            label: 'Resilience for Farmers',
            action: 'OPEN_PAGE',
            payload: {
                youtube: 'https://www.youtube.com/embed/4ieM_zKB6U4'
            }
        }
    ],
    CC_FOREST_COVER_LINKS: [{
            label: 'Increase in Wildfires',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/increase-wildfires/',
                    imgs: [
                        'A---Increase-in-Forest-Fire.jpg',
                        'A1---Forest-Fires-are-Getting-Bigger.jpg',
                        'A2---Acreage-Burned.png'
                    ]
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
                    ]
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
    ],
    // CC_SPECIES_RANGES_LINKS: [{
    //         label: 'Species Range Change Interactive',
    //         action: 'OPEN_PAGE',
    //         payload: {
    //             iframe: 'http://nca2014.globalchange.gov/highlights/report-findings/ecosystems-and-biodiversity#graphic-31940'
    //         }
    //     },
    //     {
    //         label: 'Bees are Feeling the STING of Climate Change',
    //         action: 'OPEN_PAGE',
    //         payload: {
    //             iframe: 'https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=10481'
    //         }
    //     }
    // ],
    CLIMATE_CHANGE_DISEASE_LINKS: [{
            label: 'Climate Change & Human Health',
            action: 'OPEN_PAGE',
            payload: {
                slider: {
                    baseUrl: 'public/imgs/climate-change-human-health/',
                    imgs: ['A---Climate-Change-&-Human-Health-(CDC-image).jpg']
                }
            }
        },
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
