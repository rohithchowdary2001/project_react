import React from 'react'
import './Edit.css';
const Edit = () => {
  return (<>
    <div className='edit'>
      <h1>Edit Page</h1>
      <form>
  <div className="form-group">
    <label for="editid">ID</label>
    <input type="text" className="form-control" id="editid" aria-describedby="emailHelp" placeholder="Enter ID"/><br/>
    <label for="editname">Name</label>
    <input type="text" className="form-control" id="editname" aria-describedby="emailHelp" placeholder="Enter name"/><br/>
    <label for="editgender">Gender</label>
    <div>
    <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">Female</label>
</div>
    </div><br/>
    
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div><br/>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Age</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option>
      <option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option>
      <option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option>
      <option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option>
      <option>39</option><option>40</option>
    </select>
  </div><br/>
  <input className="btn btn-primary" type="submit" value="Submit"></input>
  </form>
    </div>
    </>
  )
}

export default Edit
