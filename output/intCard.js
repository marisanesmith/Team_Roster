const intCard = ({name, id, email, school}) => {
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

module.exports = intCard