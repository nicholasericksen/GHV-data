export const MENUS = {
    MAIN_MENU_LINKS: [
        {
            label: 'Climate Monitoring',
            action: 'CLIMATE_MENU_LINKS',
        },
        {
            label: 'Biotic Communities',
            action: 'BIOTIC_MENU_LINKS',
        },
        {
            label: 'Water Resources',
            action: 'WATER_MENU_LINKS',
        }
    ],
    CLIMATE_MENU_LINKS: [
        {
            label: 'Real Time Climate Tracking',
            action: 'REAL_TIME_CLIMATE_TRACKING_LINKS',
        },
        {
            label: 'Polar Ice',
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
            label: 'Global Temperature and Greenhouse Gas Concentration',
            action: 'GLOABAL_TEMP_GG_LINKS',
        },
        {
            label: 'CLimate Change and Extreme Weather Events',
            action: 'CC_EXTREME_WEATHER',
        }
    ],
    BIOTIC_MENU_LINKS: [
        {
            label: 'Climate Change and Agriculture',
            action: 'CC_AGRICULTURE_LINKS',
        },
        {
            label: 'Climate Change and Forest Cover',
            action: 'CC_FOREST_COVER_LINKS',
        },
        {
            label: 'Climate Change and Species Ranges',
            action: 'CC_SPECIES_RANGES_LINKS',
        },
        {
            label: 'Climate Change and Disease',
            action: 'CLIMATE_CHANGE_DISEASE_LINKS',
        }
    ],
    WATER_MENU_LINKS: [
        {
            label: 'Deluge or Draught',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Freshwater Availablity and Consumption',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Water Contamination',
            action: 'MAIN_MENU_LINKS',
        },
        {
            label: 'Water and Energy',
            action: 'MAIN_MENU_LINKS',
        }
    ],
    REAL_TIME_CLIMATE_TRACKING_LINKS: [
        {
            label: 'Why Climate Data Matters',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.youtube.com/embed/-G8jy5ldiTU'
            }
        },
        {
            label: 'NOAA Global Climate Dashboard',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.climate.gov/maps-data#global-climate-dashboard'
            }
        },
        {
            label: 'ICE_CORE_VIDEO',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.youtube.com/watch?v=oHzADl-XID8'
            }
        }
    ],
    POLAR_ICE_LINKS: [
        {
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
                iframe: 'https://climate.nasa.gov/vital-signs/land-ice/'
            }
        },
        {
            label: 'National Snow & Ice Data Center',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nsidc.org/arcticseaicenews/charctic-interactive-sea-ice-graph/'
            }
        }
    ],
    SEA_LEVEL_RISE_LINKS: [
        {
            label: 'If Antartica Melted: Antartic Ice Sheet Interactive',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://ny.pbslearningmedia.org/asset/ess05_int_icemelt/'
            }
        },
        {
            label: 'NOAA Interactive Map',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://coast.noaa.gov/slr/'
            }
        },
        {
            label: 'Yonkers & Hudson Valley Coastline',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://scenichudson.org/slr/mapper'
            }
        }
    ],
    CLIMATE_WEATHER_LINKS: [
        {
            label: 'What Is Climate',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://ny.pbslearningmedia.org/resource/3059b771-8019-4836-8850-897e7cba25d5/3059b771-8019-4836-8850-897e7cba25d5/#.WVSIkdPyvuQ'
            }
        },
        {
            label: 'Weather vs Climate',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.youtube.com/embed/e0vj-0imOLw%22'
            }
        }
    ],
    GLOBAL_TEMP_GG_LINKS: [
        {
            label: 'The Greenhouse Effect',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nca2014.globalchange.gov/report/appendices/climate-science-supplement#graphic-38756'
            }
        },
        {
            label: 'Global Temperature Interactive Map',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://svs.gsfc.nasa.gov/4030'
            }
        },
        {
            label: 'C02 and Temperaure Correlation',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.epa.gov/sites/production/files/2016-07'
            }
        },
        {
            label: 'Modern Era C02 and Temperature',
            action: 'OPEN_PAGE',
            payload: {
                iframe: ''
            }
        },
        {
            label: 'NASA Video, Comparing Natural & Human Factors',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://climate.nasa.gov/climate_resources/144/'
            }
        }
    ],
    CC_EXTREME_WEATHER: [
        {
            label: 'Extreme Heat Waves',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.climate.gov/tags/heat-wave'
            }
        },
        {
            label: 'NOAA Drought Monitor USA',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.climate.gov/maps-data/data-snapshots/usdroughtmonitor-weekly-ndmc-2013-04-02'
            }
        },
        {
            label: 'Billion Dollar Weather Events',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.climate.gov/news-features/featured-images/billion-dollar-weather-disasters-1980'
            }
        },
        {
            label: 'Heavy Precipitation',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nca2014.globalchange.gov/report/our-changing-climate'
            }
        }
    ],
    CC_AGRICULTURE_LINKS: [
        {
            label: 'USDA Plant Hardiness Zone Map',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.arborday.org/media/images/changes15.png'
            }
        },
        {
            label: 'Projected Crop Yields 2050',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://www.wri.org/sites/default/files/uploads/'
            }
        },
        {
            label: 'Resilience for Farmers',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.youtube.com/embed/4ieM_zKB6U4'
            }
        }
    ],
    CC_FOREST_COVER_LINKS: [
        {
            label: 'Increase in Wildfires',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nca2014.globalchange.gov/report'
            }
        },
        {
            label: 'Global Deforestation',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://pbs.twimg.com/media/CNa83pbUEAIM8sA.png'
            }
        },
        {
            label: 'Forests: Lungs of the Earth',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://svs.gsfc.nasa.gov/vis/a000000/a003900/a003947/'
            }
        },
        {
            label: 'Projected Shifts in Forest Types',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://www.epa.gov/sites/production/files/2016-06/shiftinforesttypes-large.jpg'
            }
        }
    ],
    CC_SPECIES_RANGES_LINKS: [
        {
            label: 'Species Range Change Interactive',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nca2014.globalchange.gov/highlights/report-findings/ecosystems-and-biodiversity#graphic-31940'
            }
        },
        {
            label: 'Bees are Feeling the STING of Climate Change',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=10481'
            }
        }
    ],
    CLIMATE_CHANGE_DISEASE_LINKS: [
        {
            label: 'Climate Change & Human Health',
            action: 'OPEN_PAGE',
            payload: {
                img: 'https://www.cdc.gov/climateandhealth/images/climate_change_health_impacts600w.jpg'
            }
        },
        {
            label: 'Rise in Vector Species',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://nca2014.globalchange.gov/highlights/report-findings/human-health#graphic-21020'
            }
        },
        {
            label: 'Forest Pest Video',
            action: 'OPEN_PAGE',
            payload: {
                iframe: 'http://www.pressherald.com/2016/12/07/spread-by-trade-and-climate-bugs-butcher-americas-forests/video/'
            }
        },
        {
            label: 'Invasive Species',
            action: 'OPEN_PAGE',
        }
    ]
};
