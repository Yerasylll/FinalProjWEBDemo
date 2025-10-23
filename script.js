// ============ DATA SECTION ============
        // TODO: Add more countries here (each team member adds 2-3 countries)
        const countriesData = [
            {
                id: 1,
                name: "Japan",
                lat: 36.2048,
                lng: 138.2529,
                flag: "https://flagcdn.com/w80/jp.png",
                traditions: [
                    {
                        title: "Tea Ceremony (Chanoyu)",
                        description: "A ritualized practice of preparing and serving matcha green tea, emphasizing harmony, respect, purity, and tranquility."
                    },
                    {
                        title: "Origami",
                        description: "The traditional art of paper folding, creating intricate designs from a single sheet of paper without cutting."
                    },
                    {
                        title: "Bowing",
                        description: "A fundamental part of Japanese etiquette, used for greetings, apologies, and showing respect."
                    }
                ],
                music: {
                    title: "Traditional Koto Music",
                    description: "The koto is a 13-string zither that has been played in Japan for centuries.",
                    videoId: "Bpmwz4NTAbM"
                },
                cuisine: [
                    { name: "Sushi", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400" },
                    { name: "Ramen", img: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400" },
                    { name: "Tempura", img: "https://images.unsplash.com/photo-1559564484-e48277c952d4?w=400" },
                    { name: "Takoyaki", img: "https://images.unsplash.com/photo-1583251844515-593313f90c4d?w=400" }
                ],
                festivals: [
                    {
                        name: "Sakura Matsuri (Cherry Blossom Festival)",
                        date: "Late March - Early April",
                        description: "Celebration of the blooming cherry blossoms with picnics under the trees, called 'hanami'."
                    },
                    {
                        name: "Obon Festival",
                        date: "Mid-August",
                        description: "Buddhist festival honoring ancestors' spirits with traditional dances and lanterns."
                    }
                ]
            },
            {
                id: 2,
                name: "Italy",
                lat: 41.8719,
                lng: 12.5674,
                flag: "https://flagcdn.com/w80/it.png",
                traditions: [
                    {
                        title: "Opera & Classical Music",
                        description: "Italy is the birthplace of opera, with famous theaters like La Scala in Milan."
                    },
                    {
                        title: "Passeggiata",
                        description: "An evening ritual where people stroll through town centers to socialize and see friends."
                    },
                    {
                        title: "Coffee Culture",
                        description: "Espresso is central to Italian culture, with specific rituals for when and how to drink coffee."
                    }
                ],
                music: {
                    title: "Tarantella - Traditional Folk Dance",
                    description: "A fast-paced folk dance accompanied by tambourines and mandolins.",
                    videoId: "M0r4EcR81Zc"
                },
                cuisine: [
                    { name: "Pizza Margherita", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
                    { name: "Pasta Carbonara", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400" },
                    { name: "Gelato", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400" },
                    { name: "Tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400" }
                ],
                festivals: [
                    {
                        name: "Carnevale di Venezia",
                        date: "February",
                        description: "Famous Venice carnival with elaborate masks, costumes, and grand balls."
                    },
                    {
                        name: "Palio di Siena",
                        date: "July & August",
                        description: "Historic horse race in Siena's main square, dating back to medieval times."
                    }
                ]
            },
            {
                id: 3,
                name: "Mexico",
                lat: 23.6345,
                lng: -102.5528,
                flag: "https://flagcdn.com/w80/mx.png",
                traditions: [
                    {
                        title: "Day of the Dead (Día de los Muertos)",
                        description: "Celebration honoring deceased loved ones with colorful altars, marigolds, and sugar skulls."
                    },
                    {
                        title: "Mariachi Music",
                        description: "Traditional music ensemble featuring violins, trumpets, and guitars, often worn in charro suits."
                    },
                    {
                        title: "Lucha Libre",
                        description: "Professional wrestling characterized by colorful masks and high-flying moves."
                    }
                ],
                music: {
                    title: "Mariachi - Traditional Mexican Music",
                    description: "Energetic ensemble music with violins, trumpets, and guitars.",
                    videoId: "q-Rqdgna3Yw"
                },
                cuisine: [
                    { name: "Tacos", img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400" },
                    { name: "Mole", img: "https://images.unsplash.com/photo-1626266888223-39a4a92313e1?w=400" },
                    { name: "Tamales", img: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=400" },
                    { name: "Churros", img: "https://images.unsplash.com/photo-1599599878281-ef9c12846b7e?w=400" }
                ],
                festivals: [
                    {
                        name: "Día de los Muertos",
                        date: "November 1-2",
                        description: "UNESCO-recognized celebration honoring deceased family members with ofrendas and festivities."
                    },
                    {
                        name: "Independence Day (Grito de Dolores)",
                        date: "September 16",
                        description: "Celebration of Mexican independence with fireworks, parades, and traditional foods."
                    }
                ]
            }
            // TODO: Add more countries here - aim for 8-12 total
        ];

        // ============ MAP INITIALIZATION ============
        let map;
        let markers = [];

        function initMap() {
            // Create map centered on world view
            map = L.map('map').setView([20, 0], 2);
            
            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            
            // Add markers for each country
            addMarkers();
        }

        function addMarkers() {
            countriesData.forEach(country => {
                // Create custom icon
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: '<div style="background-color: #667eea; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white;"></div>',
                    iconSize: [30, 30]
                });

                const marker = L.marker([country.lat, country.lng], { icon: customIcon })
                    .addTo(map)
                    .bindPopup(`
                        <div style="text-align: center;">
                            <img src="${country.flag}" style="width: 50px; margin-bottom: 5px;">
                            <br><strong>${country.name}</strong>
                            <br><small>Click for details</small>
                        </div>
                    `)
                    .on('click', function() {
                        showCountryDetails(country.id);
                    });
                
                markers.push({ marker: marker, country: country });
            });
        }

        function focusCountry(countryId) {
            const country = countriesData.find(c => c.id === countryId);
            if (country) {
                map.setView([country.lat, country.lng], 5, { animate: true });
            }
        }

        // ============ DISPLAY COUNTRY LIST ============
        function displayCountryList() {
            let html = '';
            countriesData.forEach(country => {
                html += `
                    <div class="country-card" onclick="showCountryDetails(${country.id})" data-country="${country.name.toLowerCase()}">
                        <img src="${country.flag}" class="country-flag" alt="${country.name}">
                        <span class="country-name">${country.name}</span>
                    </div>
                `;
            });
            $('#countryList').html(html);
        }

        // ============ SHOW COUNTRY DETAILS ============
        function showCountryDetails(countryId) {
            const country = countriesData.find(c => c.id === countryId);
            if (!country) return;

            // Set modal title
            $('#modalTitle').html(`
                <img src="${country.flag}" style="width:50px; margin-right:15px; border-radius:5px;">
                ${country.name}
            `);

            // Traditions tab
            let traditionsHtml = '';
            country.traditions.forEach(tradition => {
                traditionsHtml += `
                    <div class="tradition-item">
                        <h6>${tradition.title}</h6>
                        <p>${tradition.description}</p>
                    </div>
                `;
            });
            $('#traditions').html(traditionsHtml);

            // Music tab
            let musicHtml = `
                <div class="music-section">
                    <h6>${country.music.title}</h6>
                    <p>${country.music.description}</p>
                    <iframe width="100%" height="315" 
                        src="https://www.youtube.com/embed/${country.music.videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
            $('#music').html(musicHtml);

            // Cuisine tab
            let cuisineHtml = '<div class="cuisine-gallery">';
            country.cuisine.forEach(dish => {
                cuisineHtml += `
                    <div class="cuisine-item">
                        <img src="${dish.img}" class="cuisine-img" alt="${dish.name}">
                        <div class="cuisine-name">${dish.name}</div>
                    </div>
                `;
            });
            cuisineHtml += '</div>';
            $('#cuisine').html(cuisineHtml);

            // Festivals tab
            let festivalsHtml = '';
            country.festivals.forEach(festival => {
                festivalsHtml += `
                    <div class="festival-item">
                        <h6>${festival.name}</h6>
                        <p><strong>Date:</strong> ${festival.date}</p>
                        <p>${festival.description}</p>
                    </div>
                `;
            });
            $('#festivals').html(festivalsHtml);

            // Show modal
            const modal = new bootstrap.Modal(document.getElementById('cultureModal'));
            modal.show();

            // Focus map on country
            focusCountry(countryId);
        }

        // ============ SEARCH FUNCTIONALITY ============
        function setupSearch() {
            $('#searchInput').on('keyup', function() {
                const searchTerm = $(this).val().toLowerCase();
                $('.country-card').each(function() {
                    const countryName = $(this).attr('data-country');
                    if (countryName.includes(searchTerm)) {
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            });
        }

        // ============ FILTER FUNCTIONALITY ============
        function setupFilters() {
            $('.filter-btn').on('click', function() {
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                const category = $(this).attr('data-category');
                // You can extend this to actually filter the displayed data
                console.log('Filter by:', category);
            });
        }

        // ============ INITIALIZE ON PAGE LOAD ============
        $(document).ready(function() {
            initMap();
            displayCountryList();
            setupSearch();
            setupFilters();
        });