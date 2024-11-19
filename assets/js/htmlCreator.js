function updateProfileInfo(profileData){
    updateProfilePhoto(profileData.photo, profileData.name)
    updateName(profileData.name)
    updateProfession(profileData.profession)
    updateLocation(profileData.location)
    updatePhone(profileData.phone)
    updateEmail(profileData.email)
    updateGithub(profileData.github)
    updateSoftSkills(profileData.skills.softSkills)
    updateTechSkills(profileData.skills.techSkills)

}

function updateProfilePhoto(photoUrl, description = ""){
    const photoElement = document.getElementById("profile.photo")
    photoElement.src = photoUrl
    photoElement.alt = description
    
}

function updateName(name){
    const nameElement = document.getElementById("profile.name")
    nameElement.innerText = name
}

function updateProfession(profession){
    const professionElement = document.getElementById("profile.profession")
    professionElement.innerText = profession
}

function updateLocation(location){
    const locationElement = document.getElementById("profile.location")
    locationElement.innerText = location
}

function updatePhone(phoneNumber){
    const phoneElement = document.getElementById("profile.phone")
    phoneElement.innerText = phoneNumber
    phoneElement.href = phoneNumber
}

function updateEmail(email){
    const emailElement = document.getElementById("profile.email")
    emailElement.innerText = email
    emailElement.href = `mailto:${email}`
}


function updateGithub(github){
    const githubElement = document.getElementById("profile.github")
    githubElement.innerText = github
    githubElement.href = github
}

function updateSoftSkills(softSkills){
    const softSkillsElement = document.getElementById("profile.skills.softSkills")
    softSkillsElement.innerHTML = softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateTechSkills(techSkills){
    console.log(techSkills)
    const techSkillsElement = document.getElementById("profile.skills.techSkills")
    techSkillsElement.innerHTML = techSkills.map(skill => `<li>${skill[name]}</li>`).join('')
}