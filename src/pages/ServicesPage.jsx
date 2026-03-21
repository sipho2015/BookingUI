import { useMemo, useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/cards/ServiceCard';
import SearchBar from '../components/ui/SearchBar';
import FilterDropdown from '../components/ui/FilterDropdown';
import {
  services,
  serviceCategories,
  serviceIssues,
  serviceSortOptions,
} from '../data/services';
import Button from '../components/ui/Button';

const parseDuration = (value) => Number.parseInt(value, 10) || 0;
const issueOnlyOptions = serviceIssues.filter((item) => item !== 'All Issues');

const diagnoseQuestions = [
  {
    key: 'symptom',
    title: 'What issue are you noticing most?',
    options: issueOnlyOptions,
  },
  {
    key: 'priority',
    title: 'What matters most right now?',
    options: ['Fast turnaround', 'Lowest cost', 'Safety first', 'Most accurate diagnosis'],
  },
  {
    key: 'usage',
    title: 'How do you mostly use your car?',
    options: ['Daily commuting', 'Long-distance travel', 'Mostly parked lately', 'Comfort and look'],
  },
];

const symptomCategoryMap = {
  'Engine Light': 'Diagnostics',
  'Brake Noise': 'Safety',
  'Battery Drain': 'Diagnostics',
  Vibration: 'Tires',
  'Poor Fuel Economy': 'Maintenance',
  Overheating: 'Diagnostics',
  'Uneven Tire Wear': 'Tires',
  Detailing: 'Detailing',
};

export default function ServicesPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [issue, setIssue] = useState('All Issues');
  const [sortBy, setSortBy] = useState('Recommended');
  const [diagnoseOpen, setDiagnoseOpen] = useState(false);
  const [diagnoseStep, setDiagnoseStep] = useState(0);
  const [diagnoseResult, setDiagnoseResult] = useState('');
  const [diagnoseAnswers, setDiagnoseAnswers] = useState({
    symptom: '',
    priority: '',
    usage: '',
  });
  const hasActiveFilters = query.trim() !== '' || category !== 'All' || issue !== 'All Issues' || sortBy !== 'Recommended';
  const activeCategory = category === 'All' ? 'All Categories' : category;

  const filtered = useMemo(() => {
    const filteredServices = services.filter((service) => {
      const searchText = `${service.name} ${service.description} ${service.category}`.toLowerCase();
      const matchesQuery = searchText.includes(query.toLowerCase());
      const matchesCategory = category === 'All' || service.category === category;
      const matchesIssue = issue === 'All Issues' || service.issues.includes(issue);
      return matchesQuery && matchesCategory && matchesIssue;
    });

    if (sortBy === 'Fastest') {
      return [...filteredServices].sort((a, b) => parseDuration(a.duration) - parseDuration(b.duration));
    }

    if (sortBy === 'Price: Low to High') {
      return [...filteredServices].sort((a, b) => a.price - b.price);
    }

    return [...filteredServices].sort((a, b) => b.popularity - a.popularity);
  }, [query, category, issue, sortBy]);

  const featuredMatch = filtered[0];
  const currentQuestion = diagnoseQuestions[diagnoseStep];
  const selectedOption = diagnoseAnswers[currentQuestion?.key];

  const openDiagnose = () => {
    setDiagnoseAnswers({ symptom: '', priority: '', usage: '' });
    setDiagnoseStep(0);
    setDiagnoseOpen(true);
  };

  const closeDiagnose = () => {
    setDiagnoseOpen(false);
    setDiagnoseStep(0);
  };

  const handleOptionSelect = (value) => {
    setDiagnoseAnswers((prev) => ({ ...prev, [currentQuestion.key]: value }));
  };

  const applyDiagnosis = () => {
    const recommendedIssue = diagnoseAnswers.symptom || 'All Issues';
    let recommendedCategory = symptomCategoryMap[diagnoseAnswers.symptom] || 'All';
    let recommendedSort = 'Recommended';

    if (diagnoseAnswers.priority === 'Fast turnaround') {
      recommendedSort = 'Fastest';
    }
    if (diagnoseAnswers.priority === 'Lowest cost') {
      recommendedSort = 'Price: Low to High';
    }
    if (diagnoseAnswers.priority === 'Safety first' && recommendedCategory === 'All') {
      recommendedCategory = 'Safety';
    }
    if (diagnoseAnswers.usage === 'Comfort and look' && recommendedCategory === 'All') {
      recommendedCategory = 'Detailing';
    }

    setIssue(recommendedIssue);
    setCategory(recommendedCategory);
    setSortBy(recommendedSort);
    setQuery('');
    setDiagnoseResult(`Smart recommendation applied: ${recommendedIssue} | ${recommendedCategory === 'All' ? 'All Categories' : recommendedCategory}`);
    closeDiagnose();
  };

  return (
    <div className="section services-page">
      <div className="container">
        <SectionTitle
          eyebrow="Services"
          title="Choose the experience that fits your day"
          subtitle="Search and filter to find the perfect service."
        />

        <div className="filters-toolbar card">
          <div className="filters-toolbar-head">
            <div>
              <p className="card-eyebrow">Smart Service Finder</p>
              <h3>Tell us what your car is showing</h3>
              <p className="filters-toolbar-subtitle">
                Pick a symptom, refine by category, and get the best matching services instantly.
              </p>
            </div>
            <div className="filters-head-actions">
              <button className="btn btn-secondary diagnose-btn" onClick={openDiagnose}>
                Quick Diagnose
              </button>
              <span className="results-chip">{filtered.length} results</span>
            </div>
          </div>

          <div className="issue-picker">
            <p className="filters-field-label">Common Symptoms</p>
            <div className="issue-chips">
              {serviceIssues.map((item) => (
                <button
                  key={item}
                  className={`issue-chip ${issue === item ? 'active' : ''}`}
                  onClick={() => setIssue(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="filters-toolbar-controls">
            <div className="filters-field">
              <p className="filters-field-label">Search Services</p>
              <SearchBar value={query} onChange={setQuery} placeholder="Oil change, diagnostics, detailing..." />
            </div>
            <div className="filters-field">
              <FilterDropdown label="Category" value={category} onChange={setCategory} options={serviceCategories} />
            </div>
            <div className="filters-field">
              <FilterDropdown label="Sort" value={sortBy} onChange={setSortBy} options={serviceSortOptions} />
            </div>
            <button
              className="btn btn-ghost filters-clear-btn"
              onClick={() => {
                setQuery('');
                setCategory('All');
                setIssue('All Issues');
                setSortBy('Recommended');
              }}
              disabled={!hasActiveFilters}
            >
              Clear Filters
            </button>
          </div>

          <div className="filters-status">
            <span><strong>Category:</strong> {activeCategory}</span>
            <span><strong>Issue:</strong> {issue}</span>
            <span><strong>Sort:</strong> {sortBy}</span>
          </div>
          {diagnoseResult ? (
            <div className="diagnose-result">
              <span>{diagnoseResult}</span>
            </div>
          ) : null}
        </div>

        {issue !== 'All Issues' && featuredMatch ? (
          <div className="card service-match-card">
            <div>
              <p className="card-eyebrow">Best Match</p>
              <h3>{featuredMatch.name}</h3>
              <p className="muted">{featuredMatch.description}</p>
            </div>
            <div className="service-match-meta">
              <span>{featuredMatch.duration}</span>
              <strong>${featuredMatch.price}</strong>
            </div>
          </div>
        ) : null}

        <div className="grid grid-3 services-grid">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} onBook={() => {}} />
          ))}
        </div>

        {diagnoseOpen ? (
          <div className="modal-overlay">
            <div className="modal booking-modal diagnose-modal">
              <div className="modal-header">
                <h3>Quick Diagnose</h3>
                <button className="modal-close" onClick={closeDiagnose} aria-label="Close dialog">
                  X
                </button>
              </div>
              <p className="modal-description">Answer 3 quick questions and we will pre-select the best service setup.</p>

              <div className="diagnose-progress">
                {diagnoseQuestions.map((item, index) => (
                  <span key={item.key} className={`diagnose-step ${index <= diagnoseStep ? 'active' : ''}`}>
                    {index + 1}
                  </span>
                ))}
              </div>

              <div className="diagnose-question">
                <p>{currentQuestion.title}</p>
                <div className="diagnose-options">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      className={`diagnose-option ${selectedOption === option ? 'active' : ''}`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  variant="ghost"
                  className="modal-btn"
                  onClick={() => setDiagnoseStep((prev) => Math.max(prev - 1, 0))}
                  disabled={diagnoseStep === 0}
                >
                  Back
                </Button>
                {diagnoseStep < diagnoseQuestions.length - 1 ? (
                  <Button
                    variant="primary"
                    className="modal-btn"
                    onClick={() => setDiagnoseStep((prev) => prev + 1)}
                    disabled={!selectedOption}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    className="modal-btn"
                    onClick={applyDiagnosis}
                    disabled={!selectedOption}
                  >
                    Apply Recommendation
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
