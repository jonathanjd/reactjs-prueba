// actions types
export const CONTACT_UPDATE_TITLE = 'CONTACT_UPDATE_TITLE';

// simple action
export function updateTitle(title) {
  return {
    type: CONTACT_UPDATE_TITLE,
    payload: { title },
  };
}

// async action
