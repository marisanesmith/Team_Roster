const manCard = ({name, id, email, office}) => {
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

module.exports = manCard