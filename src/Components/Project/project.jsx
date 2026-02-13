import React, { useState } from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icom from '../../assets/arrow_icon.svg'

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'HTML', 'CSS', 'JavaScript', 'React js', 'Python'];
  // Determine filtered set (if a specific filter is chosen, show all matching items)
  const matchesFilter = (work) => {
    if (filter === 'All') return true;
    const key = filter.toLowerCase();
    if (work.tags && Array.isArray(work.tags)) return work.tags.some(t => t.toLowerCase().includes(key));
    return work.code && work.code.toLowerCase().includes(key);
  }

  const filtered = mywork_data.filter(matchesFilter);
  const visibleWorks = filter === 'All' ? (showAll ? mywork_data : mywork_data.slice(0, 3)) : filtered;
  return (
    <div id='projects' className='project'>
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="filter-bar" role="toolbar" aria-label="Project filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
            type="button"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="project-container">
        {visibleWorks.map((work, index) => {
            return (
              <a key={work.w_no || index} href={work.link || '#'} target="_blank" rel="noopener noreferrer" className="work-item">
                <img src={work.w_img} alt={work.w_name || `project-${index}`} className='project-img'/>
              </a>
            )
        })}

      </div>
      {filter === 'All' && (
        <div className="mywork-showmore" onClick={() => setShowAll(prev => !prev)} role="button" tabIndex={0}>
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icom} alt="Arrow Icon" className={showAll ? 'rotated' : ''} />
        </div>
      )}
    </div>
  )
}

export default Project
