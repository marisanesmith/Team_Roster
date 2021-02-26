const manCard = (name, id, email, office) => {
    return `<div class="row">
    <div class="col s12 m12">
      <div class="card brown lighten-2">
        <div class="card-content white-text center">
          <span class="card-title">Manager</span>
          <h2> ${name} </h2>
          <p>Employee ID: ${id} </p>
          <p>Office #: ${office} </p>
        </div>
        <div class="card-action center">
            <i class="far fa-envelope"></i>
            <a href="#" class="white-text"> ${email} </a>
        </div>
      </div>
    </div>
  </div>`
}

const engCard = (name, id, email, github) => {
    return `<div class="row">
    <div class="col s4 m4">
      <div class="card brown lighten-2">
        <div class="card-content white-text">
          <span class="card-title">Engineer</span>
          <h2> ${name} </h2>
          <p>Employee Id: ${id} </p>
          <p><i class="fab fa-github"></i><span> GitHub: ${github} </span></p>
        </div>
        <div class="card-action">
            <i class="far fa-envelope"></i>
            <a href="#" class="white-text"> ${email} </a>
        </div>
      </div>
    </div>`
}

const intCard = (name, id, email, school) => {
    return `<div class="row">
    <div class="col s4 m4">
      <div class="card brown lighten-2">
        <div class="card-content white-text">
          <span class="card-title">Intern </span>
          <h2> ${name} </h2>
          <p>Employee Id: ${id} </p>
          <p><i class="fas fa-graduation-cap"></i><span> School: ${school} </span></p>
        </div>
        <div class="card-action">
            <i class="far fa-envelope"></i>
            <a href="#" class="white-text"> ${email} </a>
        </div>
      </div>
    </div>`
}

// module.exports.manCard = manCard;
// module.exports.engCard = engCard;
// module.exports.intCard = intCard;

module.exports = {
    manCard = manCard,
    engCard = engCard,
    intCard = intCard
}
