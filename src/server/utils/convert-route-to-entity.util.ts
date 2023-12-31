const mapping: Record<string, string> = {
  attendances: 'attendance',
  companies: 'company',
  departments: 'department',
  employees: 'employee',
  'job-positions': 'job_position',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
