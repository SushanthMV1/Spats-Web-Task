let elm = document.getElementsByClassName("input");
        let job;

        document.getElementById("uploadForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission behavior

            elm = document.getElementsByClassName("input");

            job = '<div class="job">' +
                    '<div class="slotA">' +
                        '<div class="slotA1">' +
                            '<div class="role">' + elm[7].value + '</div>' +
                            '<div class="company">' + elm[3].value + '</div>' +
                        '</div>' +
                        '<div class="slotA2">' +
                            '<div class="jobtype">' + elm[0].value + '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="slotB">' +
                        '<div class="slotB1">' +
                            '<div class="stipend"><i class="fa-solid fa-money-bill" style="margin-right: 5px;"></i>' + elm[1].value + 'Rs / Month</div>' +
                            '<div class="location"><i class="fa-solid fa-location-dot icon" style="margin-right: 11px;"></i>' + elm[6].value + '</div>' +
                            '<div class="duration"><i class="fa-solid fa-calendar icon" style="margin-right: 9px;"></i>' + elm[2].value + '</div>' +
                        '</div>' +
                        '<div class="slotB2">' +
                            '<div class="startby">' +
                                '<div class="caption">Start By:</div>' +
                                '<div class="content">' + elm[4].value + '</div>' +
                            '</div>' +
                            '<div class="applyby">' +
                                '<div class="caption">Apply By:</div>' +
                                '<div class="content">' + elm[5].value + '</div>' +
                            '</div>' +
                            '<div class="jobdes">' +
                                '<div class="caption">Description:</div>' +
                                '<div class="content">' + elm[8].value + '</div>' +
                            '</div>' +
                            '<div class="skillsReq">' +
                                '<div class="caption">Skills Required:</div>' +
                                '<div class="content">'+ elm[9].value +'</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';

            document.getElementById("fetchContainertitle").insertAdjacentHTML('afterend', job); //Adding the code through insertAdjacentHTML function
        });